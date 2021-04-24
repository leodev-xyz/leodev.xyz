module.exports = {
    mode: "jit",
    purge: [
        "./src/**/*.{html,hbs,md}",
        "./public/**/*.{html,hbs,md}",
        "index.js"
    ],
    darkMode: "class", // or 'media' or 'class'
    theme: {
    },
    variants: {
      extend: {},
    },
    plugins: [],
}
