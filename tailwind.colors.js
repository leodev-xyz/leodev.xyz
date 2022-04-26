
function cssToRgb(css) {
    const value = parseInt(css.substr(1), 16);
    return [value >> 16, value >> 8 & 0xFF, value & 0xFF];
}
function rgbToCss(rgb) {
    return "#" + ((rgb[0] << 16) + (rgb[1] << 8) + rgb[2]).toString(16).padStart(6, "0");
}

function transition(transition, start, end) {
    const result = [0, 0, 0];

    for(let i = 0; i < 3; i++) {
        if(start[i] < end[i])
            result[i] = Math.round(start[i] + (end[i] - start[i]) * transition);
        else
            result[i] = Math.round(start[i] - (start[i] - end[i]) * transition);
    }

    return result;
}

function fillInBetween(min, start_color, max, end_color, step) {
    const colors = {};
    for(let i = min; i < max; i += step) {
        const transition_value = (i - min) / (max - min);
        colors[i] = rgbToCss(transition(transition_value, start_color, end_color));
    }
    return colors;
}


function colorFill(color) {
    if(typeof color !== "object")
        return color;
    else if(!color[100]) {
        const obj = {};
        for(const name in color) {
            obj[name] = colorFill(color[name])
        }
        return obj;
    }

    let obj = {};
    const keys = Object.keys(color);
    for(let i = -1; i < keys.length; i++) {
        const start = +(keys[i] || "0");
        const end = +(keys[i + 1] || "1000");

        let start_color = color[start];
        let end_color = color[end];
        if(!start_color) {
            const first = cssToRgb(color[keys[i + 1]]);
            const second = cssToRgb(color[keys[i + 2]]);
            if(first[0] - second[0] + first[0] >= 256 || first[1] - second[1] + first[1] >= 256 || first[2] - second[2] + first[2] >= 256)
                start_color = "#ffffff"
            else
                start_color = rgbToCss([first[0] - second[0] + first[0], first[1] - second[1] + first[1], first[2] - second[2] + first[2]]);
        }
        if(!end_color) {
            const first = cssToRgb(color[keys[i - 1]]);
            const second = cssToRgb(color[keys[i - 2]]);
            if(first[0] - second[0] + first[0] < 0 || first[1] - second[1] + first[1] < 0 || first[2] - second[2] + first[2] < 0)
                end_color = "#000000"
            else
                end_color = rgbToCss([first[0] - second[0] + first[0], first[1] - second[1] + first[1], first[2] - second[2] + first[2]]);
        }
        obj = {...obj, ...fillInBetween(start, cssToRgb(start_color), end, cssToRgb(end_color), 10)};
    }
    return obj;
}

function colorCross(a, b, transition_value) {
    if(typeof a === "object") {
        const obj = {};
        for(const name in a) {
            obj[name] = colorCross(a[name], b[name], transition_value);
        }
        return obj;
    }
    return rgbToCss(transition(transition_value || 0.5, cssToRgb(a), cssToRgb(b)));
}

module.exports = { colorFill, colorCross, rgbToCss, cssToRgb }