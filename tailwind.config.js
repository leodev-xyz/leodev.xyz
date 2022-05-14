const colors = require("tailwindcss/colors");
const { colorFill, colorCross } = require("./tailwind.colors.js");

colors.viople = colorCross(colors.violet, colors.purple);
colors.purdigo = colorCross(colors.purple, colors.indigo);


module.exports = {
    mode: "jit",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./lib/**/*.js"
    ],
    darkMode: "class", // or "media" or "class"
    theme: {
        extend: {
            colors: colorFill(colors),
        }
    },
    variants: {
      extend: {},
    },
    plugins: [],
}
