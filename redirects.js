
module.exports = class Redirects {
    constructor() {
        this.redirects = [];
    }

    addRedirect(src, dest, permanent) {
        this.redirects.push([src, dest, typeof permanent === "number" ? permanent : (permanent ? 301 : 302)]);
    }

    removeRedirect(src) {
        const toremove = [];
        if(typeof src === "function")
            for(const redirect in this.redirects) {
                if(src(redirect)) toremove.push(redirect);
            }
        else if(typeof src === "object" && src.test) { // regex
            for(const redirect in this.redirects) {
                if(src.test(redirect)) toremove.push(redirect);
            }
        } else {
            for(const redirect in this.redirects) {
                if(src === redirect[0]) toremove.push(redirect);
            }
        }
        for(const remove in toremove) {
            this.redirects.remove(this.redirects.indexOf(remove));
        }
    }

    export() {
        return this.redirects.map(x => x.join(" ")).join("\n");
    }
}
