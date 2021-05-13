
const fs = require("fs-extra");
const handlebars = require("handlebars");
const marked = require("marked");
const path = require("path");
const coffeescript = require("coffeescript");
const crypto = require("crypto");
const { minify } = require("terser");
const filesize = require('file-size');
const hljs = require('highlight.js');
const luamin = require("luamin");
const exec = require('child_process').exec;
const tmpdir = require("os").tmpdir;


const builtin_doclinks = require("./doclinks.js");
const Redirector = require("./redirects.js");


let doclinks = {};
let doclinks_current_only = {};
let missinglinks = 0;
let currentlyrendering = undefined;
let header = undefined;
let in_definition = 0;
const safemarked = (content, filename) => {
    if(filename) {
        currentlyrendering = filename;
        if(!content)
            content = fs.readFileSync(`public/${filename}`).toString();
    } else
        currentlyrendering = undefined;
    in_definition = 0;
    header = undefined;
    return marked(content) + (in_definition === 2 ? "</div>" : "");
}

handlebars.registerPartial("head", fs.readFileSync("src/head.html").toString());
handlebars.registerPartial("header", fs.readFileSync("src/header.html").toString());
handlebars.registerPartial("footer", fs.readFileSync("src/footer.html").toString());

handlebars.registerHelper("include_markdown", options => {
    const markdown = safemarked(fs.readFileSync(`public/${options.hash.file}`).toString());
    return `<div class="markdown">${markdown}</div>`;
})
handlebars.registerHelper("docsidebarlink", options => {
    const name = options.hash.name.split(".");
    if(name.length === 1)
        return `<a class="block mt-2 font-bold" href="#${options.hash.ref}">${name[name.length - 1]}</a>`
    return `<a class="block" href="#${options.hash.ref}">${name.slice(0, -1).join(".")}.<span class="font-semibold">${name[name.length - 1]}</span></a>`
})

const LICENSE_CORE = `(c) Copyright LeoDeveloper 2020 - ${new Date().getFullYear()}\nReleased under the MIT license at https://leodeveloper.pages.dev\nVisit https://leodeveloper.pages.dev/license.html for more information.`

const LICENSES = {
    ".js": `/*\n${LICENSE_CORE}\n*/\n\n`,
    ".coffee": `###\n${LICENSE_CORE}\n###\n\n`,
    ".lua": `--[[\n${LICENSE_CORE}\n]]\n\n`,
    ".moon": `--[[\n${LICENSE_CORE}\n]]\n\n`,
}



marked.use({renderer: {
    codespan: code => {
        if(!code.startsWith(":link:"))
            return false;
        const parts = code.split(":");
        const id = parts.slice(2).join("-");
        if(!doclinks)
            return `<code>${parts[parts.length - 1]}</code>`;
        if(!doclinks[id]) {
            //if(missinglinks === -1)
            //    throw new Error(`invalid link: ${id}`)
            missinglinks++;
            return false;
        }
        return `<a href="${doclinks[id]}"><code>${parts[parts.length - 1]}</code></a>`
    },
    strong: text => {
        if(!text.startsWith(":link:") || !doclinks)
            return false;
        // this allows for links like ":link:someotherid:shown text"
        const parts = text.split(":");
        const id = parts.slice(2).join("-");
        const name = parts[parts.length - 1].split(".");
        doclinks[id] = `/${currentlyrendering}#${id}`
        if(!doclinks_current_only[id]) doclinks_current_only[id] = parts[parts.length - 1];
        const prefix = (in_definition === 2 ? "</div>" : "") + `<a href="#${id}" class="anchor w-4 h-4 mr-1"><img class="inline w-4 h-4 invisible" src="/static/svg/anchor.svg"></img></a>`;
        in_definition = 1;
        if(name.length === 1)
            return prefix + `<strong id="${id}">${name[0]}</strong>`;
        return prefix + `<span id="${id}">${name.slice(0, -1).join(".")}.<strong>${name[name.length - 1]}</strong></span>`;
    },
    heading: (text, level) => {
        if(level === 1)
            header = text;
        if(text.startsWith("</div>")) {
            text = text.substr(6);
            in_definition = 2;
        }
        if(in_definition === 2) {
            in_definition = 0;
            return `</div><h${level}>${text}</h${level}>`
        }
        in_definition = 0;
        return `<h${level}>${text}</h${level}>`;
    },
    paragraph: string => {
        if(in_definition === 1) {
            in_definition++;
            return `<p>${string}</p><div class="m-16">`
        }
        return false;
    },
    code: function(code, lang) {
        if (lang === "nohighlight" || !lang) return false;
        return `<pre><code class="hljs">${hljs.highlight(code, {language: lang}).value}</code></pre>`;
    }
}})

const generate_docs = (map, builtin_doclinks) => {
    // reset everything
    doclinks = Object.assign({}, builtin_doclinks);
    missinglinks = 0;
    const markdown = {};
    const headers = {};
    for(const input in map) {
        doclinks_current_only = {}
        markdown[input] = {
            markdown: safemarked(fs.readFileSync(`public/${input}`).toString(), map[input]),
            doclinks: doclinks_current_only
        };
        headers[input] = header;
    }
    // ok, some links were missing, but doclinks should be populated by now
    if(missinglinks > 0) {
        missinglinks = -1; // if any are still missing => error
        for(const input in map) {
            doclinks_current_only = {}
            markdown[input] = {
                markdown: safemarked(fs.readFileSync(`public/${input}`).toString(), map[input]),
                doclinks: doclinks_current_only
            };
        }
    }
    const template = handlebars.compile(fs.readFileSync("src/doc.hbs").toString());

    for(const input in map) {
        fs.writeFileSync(`dist/${map[input]}`, template({
            name: headers[input],
            markdown: markdown[input].markdown,
            doclinks: Object.keys(markdown[input].doclinks).length > 0 ? markdown[input].doclinks : undefined
        }))
    }

    return markdown;
}
const generate_scripts = async (where) => {
    const scripts = fs.readdirSync(`public/${where}`);
    const manifests = [];
    for(const script of scripts) {
        if(fs.existsSync(`public/${where}/${script}/manifest.json`)) {
            manifests.push(JSON.parse(fs.readFileSync(`public/${where}/${script}/manifest.json`).toString()));
            manifests[manifests.length - 1].id = script;
        }
    }

    const markdown = [fs.readFileSync(`public/${where}.md`)];
    for(const manifest of manifests) {
        if(manifest.name) markdown.push(`\n## ${manifest.name}\n`);
        if(manifest.description) markdown.push(fs.readFileSync(`public/${where}/${manifest.id}/${manifest.description}`));
        if(manifest.version) {
            fs.ensureDirSync(`dist/${where}/${manifest.id}`)
            fs.writeFileSync(`dist/${where}/${manifest.id}/latest`, manifest.version);
        }
        if(manifest.files) {
            markdown.push(`\n<div class="w-full overflow-auto">\n\n`);
            markdown.push("|  Filename  |  Size  |  SHA256  |  MD5  |\n");
            markdown.push("| ---------- | ------ | -------- | ----- |\n");
            for(const file of manifest.files) {
                const scripts = await prepare_scripts(where, manifest.id, file, manifest.settings);
                for(const script of scripts) {
                    const filename = script[0];
                    let content = script[1];
                    if(LICENSES[path.extname(filename)])
                        content = LICENSES[path.extname(filename)] + content;
                    const sha256 = crypto.createHash("sha256").update(content).digest("hex");
                    const md5 = crypto.createHash("md5").update(content).digest("hex");
                    fs.ensureDirSync(`dist/${where}/${manifest.id}`);
                    fs.writeFileSync(`dist/${where}/${manifest.id}/${filename}`, content);
                    markdown.push(`|  [${filename}](/${where}/${manifest.id}/${filename})  |  ${filesize(content.length).human()}  |  \`${sha256}\`  |  \`${md5}\`  |\n`);
                }
            }
            markdown.push("</div>\n\n");
        }
    }

    const bare = handlebars.compile(fs.readFileSync("src/bare.hbs").toString());

    fs.writeFileSync(`dist/${where}.html`, bare({
        name: "Scripts",
        bare: `<div class="markdown">${safemarked(markdown.join(""))}</div>`
    }))
}
const prepare_scripts = async (where, scriptname, script, settings) => {
    const scripts = [];
    let source = fs.readFileSync(`public/${where}/${scriptname}/${script}`).toString();
    if(path.extname(script) === ".coffee") {
        scripts.push([script, source]);
        script = script.substr(0, script.length - 7) + ".js";
        source = coffeescript.compile(source, {bare: !settings || !('bare' in settings) ? true : settings.bare});
    }
    if(path.extname(script) === ".js") {
        scripts.push([script, source]);
        source = (await minify(source, {ecma: 5, format: {ascii_only: true}})).code;
        scripts.push([script.substr(0, script.length - 3) + ".min.js", source]);
    }
    if(path.extname(script) === ".moon" || path.extname(script) === ".yue") {
        const isMoon = path.extname(script) === ".moon";
        scripts.push([script, source]);
        const tmp = tmpdir();
        fs.writeFileSync(path.join(tmp, script), source);
        try {
            await new Promise((resolve, reject) => {
                exec((isMoon ? "moonc" : "yue") + " " + path.join(tmp, script), (err, stdout, stderr) => {
                    if(err) {
                        if(err.code === 127 && err.message.indexOf(`${(isMoon ? "moonc" : "yue")}: command not found`) >= 0) {
                            console.error(`Please install ${(isMoon ? "moonscript" : "yuescript")} for compiling ${script}`);
                        } else {
                            console.error(`Error while compiling ${(isMoon ? "moon" : "yue")}script file: ${stderr ? stderr : stdout}`);
                        }
                        return reject(err);
                    }
                    resolve();
                })
            })
        } catch(e) {
            return scripts;
        }
        script = script.substr(0, script.length - path.extname(script).length) + ".lua"
        source = fs.readFileSync(path.join(tmp, script)).toString();
    }
    if(path.extname(script) === ".lua") {
        scripts.push([script, source]);
        scripts.push([script.substr(0, script.length - 4) + ".min.lua", luamin.minify(source)])
    }
    return scripts;
}

const clean_link = (text) => text.replace(/`:link:([^`]+)`/g, (_, t) => t)

const generate_snippets = (input, output, lang, scope) => {
    const lines = fs.readFileSync(`public/${input}`).toString().split("\n");
    const snippets = generate_snippet_ast(lines);

    const snippetjson = {};
    if(lang === "js" || lang === "lua") {
        for(const snippet of snippets) {
            if(snippet.function) {
                snippetjson[snippet.name.replace(/[^a-zA-Z]/g, "")] = {
                    prefix: clean_link(snippet.name + "(" + snippet.arguments.map((a) => a.join(": ")).join(", ") + ")" + (snippet.return ? ": " + snippet.return : "")),
                    body: clean_link(snippet.name + "(" + snippet.arguments.map((a) => a[0]).join(", ") + ")"),
                    description: clean_link(snippet.description).trim(),
                    scope: scope.join(",")
                }
            } else {
                snippetjson[snippet.name.replace(/[^a-zA-Z]/g, "")] = {
                    prefix: clean_link(snippet.name + (snippet.return ? ": " + snippet.return : "")),
                    body: clean_link(snippet.name),
                    description: clean_link(snippet.description).trim(),
                    scope: scope.join(",")
                }
            }
        }
    } else if(lang === "coffee" || lang === "moon" || lang === "yue") {
        for(const snippet of snippets) {
            if(snippet.function) {
                snippetjson[snippet.name.replace(/[^a-zA-Z]/g, "")] = {
                    prefix: clean_link(snippet.name + (snippet.arguments.length ? " " + snippet.arguments.map((a) => a.join(": ")).join(", ") : lang === "coffee" ? "()" : "!") + (snippet.return ? " -> " + snippet.return : "")),
                    body: clean_link(snippet.name + (snippet.arguments.length ? " " + snippet.arguments.map((a) => a[0]).join(", ") : lang === "coffee" ? "()" : "!")),
                    description: clean_link(snippet.description).trim(),
                    scope: scope.join(",")
                }
            } else {
                snippetjson[snippet.name.replace(/[^a-zA-Z]/g, "")] = {
                    prefix: clean_link(snippet.name + (snippet.return ? ": " + snippet.return : "")),
                    body: clean_link(snippet.name),
                    description: clean_link(snippet.description).trim(),
                    scope: scope.join(",")
                }
            }
        }
    } else {
        throw new Error(`unknown lang: ${lang}`)
    }

    fs.writeFileSync(`dist/${output}`, JSON.stringify(snippetjson, undefined, 2));
}

const generate_snippet_ast = (lines) => {
    let tag = undefined;
    const snippets = [];
    for(const line of lines) {
        if(line.startsWith("**:link:")) {
            if(tag) snippets.push(tag);
            tag = {
                name: line.split("**")[1].split(":"),
                arguments: [],
                return: null,
                description: "",
                function: true
            }
            tag.name = tag.name[tag.name.length - 1]

            arguments = line.split("**")[2]
            if(arguments.startsWith("(")) {
                const args = arguments.substr(1).split(")")[0]
                if(args) {
                    for(const arg of args.split(", ")) {
                        tag.arguments.push(arg.split(": "));
                    }
                }
                if(!arguments.endsWith(")")) {
                    tag.return = arguments.split("): ")[1];
                }
            } else {
                tag.return = arguments.substr(2);
                tag.function = false
            }

        } else if(line.startsWith("#")) {
            if(tag) snippets.push(tag);
            tag = undefined;
        } else if(tag) {
            tag.description += line + "\n";
        }
    }
    
    if(tag) snippets.push(tag);
    return snippets;
}


const generate_markdown = (i, n, o) => {
    const template = handlebars.compile(fs.readFileSync("src/markdown.hbs").toString());
    const html = template({name: n, file: i});
    fs.writeFileSync(`dist/${o}`, html);
}

const generate_blog = (path) => {
    const authors = JSON.parse(fs.readFileSync(`public/${path}/authors.json`).toString());
    let template = handlebars.compile(fs.readFileSync("src/blog/author.hbs").toString());
    fs.ensureDirSync(`dist/${path}/authors`);
    for(const id in authors) {
        authors[id].id = id;
        const html = template({author: authors[id], description: `${path}/authors/${id}.md`});
        fs.writeFileSync(`dist/${path}/authors/${id}.html`, html);
    }

    fs.ensureDirSync(`dist/${path}/articles`);
    template = handlebars.compile(fs.readFileSync("src/blog/article.hbs").toString());
    const articles = [];
    const tags = {};
    for(const article of fs.readdirSync(`public/${path}/articles`).reverse()) {
        if(!fs.existsSync(`public/${path}/articles/${article}/manifest.json`)) continue;
        const manifest = JSON.parse(fs.readFileSync(`public/${path}/articles/${article}/manifest.json`).toString());
        manifest.id = article;
        if(manifest.public !== false) {
            for(const tag of manifest.tags) {
                if(!tags[tag]) tags[tag] = [];
                tags[tag].push(manifest);
            }
            articles.push(manifest);
        }
        const html = template({article: manifest, authors: manifest.authors.map(id => authors[id]), file: `${path}/articles/${article}/${manifest.file}`, path: path});
        fs.ensureDirSync(`dist/${path}/articles/${article}/`);
        fs.writeFileSync(`dist/${path}/articles/${article}/article.html`, html);
        if(fs.existsSync(`public/${path}/articles/${article}/assets`)) {
            fs.copySync(`public/${path}/articles/${article}/assets`, `dist/${path}/articles/${article}/assets`);
        }
    }

    template = handlebars.compile(fs.readFileSync("src/blog/blog.hbs").toString());
    const html = template({articles: articles, path: path});
    fs.writeFileSync(`dist/${path}/index.html`, html);

    fs.ensureDirSync(`dist/${path}/tags`);
    for(const tag in tags) {
        const html = template({tag: tag, articles: tags[tag], path: path});
        fs.writeFileSync(`dist/${path}/tags/${tag}.html`, html);
    }
}

(async function() {
    fs.copySync("public/static", "dist/static");

    const redirects = new Redirector();
    redirects.addRedirect("/discord", "https://discord.gg/FCnK6xp");
    fs.writeFileSync("dist/_redirects", redirects.export());

    (function() { // SCOPE
        const template = handlebars.compile(fs.readFileSync("src/home.hbs").toString());
        const html = template();
        fs.writeFileSync(`dist/index.html`, html);
    })()
    generate_markdown("privacy.md", "Privacy Policy", "privacy.html");
    generate_markdown("license.md", "License", "license.html");
    generate_markdown("404.md", "404: Not Found", "404.html");
    
    generate_blog("blog");
    
    // onetap
    //   V3
    fs.ensureDirSync("dist/csgo/onetap/v3/docs");
    generate_docs({
        "csgo/onetap/v3/docs/index.md":     "csgo/onetap/v3/docs/index.html",
        "csgo/onetap/v3/docs/types.md":     "csgo/onetap/v3/docs/types.html",
        "csgo/onetap/v3/docs/globals.md":   "csgo/onetap/v3/docs/globals.html",
        "csgo/onetap/v3/docs/callbacks.md": "csgo/onetap/v3/docs/callbacks.html"
    }, builtin_doclinks.javascript);
    generate_snippets("csgo/onetap/v3/docs/globals.md", "csgo/onetap/v3/snippets.js.json", "js", ["javascript", "typescript"]);
    generate_snippets("csgo/onetap/v3/docs/globals.md", "csgo/onetap/v3/snippets.coffee.json", "coffee", ["coffeescript"]);
    await generate_scripts("csgo/onetap/v3/scripts");
    //   V3 Re:Run
    fs.ensureDirSync("dist/csgo/onetap/v3rerun/docs");
    generate_docs({
        "csgo/onetap/v3rerun/docs/index.md":     "csgo/onetap/v3rerun/docs/index.html",
        "csgo/onetap/v3rerun/docs/classes.md":   "csgo/onetap/v3rerun/docs/classes.html",
        "csgo/onetap/v3rerun/docs/constants.md": "csgo/onetap/v3rerun/docs/constants.html",
        "csgo/onetap/v3rerun/docs/globals.md":   "csgo/onetap/v3rerun/docs/globals.html",
        "csgo/onetap/v3rerun/docs/callbacks.md": "csgo/onetap/v3rerun/docs/callbacks.html"
    }, builtin_doclinks.javascript)
    generate_snippets("csgo/onetap/v3rerun/docs/globals.md", "csgo/onetap/v3rerun/snippets.js.json", "js", ["javascript", "typescript"]);
    generate_snippets("csgo/onetap/v3rerun/docs/globals.md", "csgo/onetap/v3rerun/snippets.coffee.json", "coffee", ["coffeescript"]);
    await generate_scripts("csgo/onetap/v3rerun/runtime");
    await generate_scripts("csgo/onetap/v3rerun/scripts");
    //   V4
    fs.ensureDirSync("dist/csgo/onetap/v4/docs");
    generate_docs({
        "csgo/onetap/v4/docs/index.md":     "csgo/onetap/v4/docs/index.html",
        "csgo/onetap/v4/docs/types.md":     "csgo/onetap/v4/docs/types.html",
        "csgo/onetap/v4/docs/globals.md":   "csgo/onetap/v4/docs/globals.html",
        "csgo/onetap/v4/docs/callbacks.md": "csgo/onetap/v4/docs/callbacks.html",
        "csgo/onetap/v4/docs/migrating.md": "csgo/onetap/v4/docs/migrating.html"
    }, builtin_doclinks.javascript);
    generate_snippets("csgo/onetap/v4/docs/globals.md", "csgo/onetap/v4/snippets.js.json", "js", ["javascript", "typescript"]);
    generate_snippets("csgo/onetap/v4/docs/globals.md", "csgo/onetap/v4/snippets.coffee.json", "coffee", ["coffeescript"]);
    
    
    // aimware
    //   V5
    fs.ensureDirSync("dist/csgo/aimware/v5/docs");
    generate_docs({
        "csgo/aimware/v5/docs/index.md":      "csgo/aimware/v5/docs/index.html",
        "csgo/aimware/v5/docs/callbacks.md":  "csgo/aimware/v5/docs/callbacks.html",
        "csgo/aimware/v5/docs/classes.md":    "csgo/aimware/v5/docs/classes.html",
        "csgo/aimware/v5/docs/globals.md":    "csgo/aimware/v5/docs/globals.html",
        "csgo/aimware/v5/docs/ressources.md": "csgo/aimware/v5/docs/ressources.html"
    }, builtin_doclinks.lua)
    generate_snippets("csgo/aimware/v5/docs/globals.md", "csgo/aimware/v5/snippets.lua.json", "lua", ["lua"]);
    generate_snippets("csgo/aimware/v5/docs/globals.md", "csgo/aimware/v5/snippets.moon.json", "moon", ["moonscript", "yuescript"]);
    // await generate_scripts("csgo/aimware/v5/scripts");


    // neverlose
    //   V2
    fs.ensureDirSync("dist/csgo/neverlose/v2/docs");
    generate_docs({
        "csgo/neverlose/v2/docs/index.md":      "csgo/neverlose/v2/docs/index.html",
        "csgo/neverlose/v2/docs/callbacks.md":  "csgo/neverlose/v2/docs/callbacks.html",
        "csgo/neverlose/v2/docs/classes.md":    "csgo/neverlose/v2/docs/classes.html",
        "csgo/neverlose/v2/docs/globals.md":    "csgo/neverlose/v2/docs/globals.html",
        "csgo/neverlose/v2/docs/ressources.md": "csgo/neverlose/v2/docs/ressources.html"
    }, builtin_doclinks.lua)
})();
