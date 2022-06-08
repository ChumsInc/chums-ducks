import hexRgb from "hex-rgb";

const rgbaTest = /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\);*$/;

export function isLightColor(color:string) {

    // Variables for red, green, blue values
    let red:number;
    let green:number;
    let blue:number;


    // Check the format of the color, HEX or RGB?
    if (color.trim().match(/^rgb/)) {

        // If RGB --> store the red, green, blue values in separate variables
        const [, _r, _g, _b] = color.trim().match(rgbaTest) || [];

        red = +_r;
        green = +_g;
        blue = +_b;
    }
    else {
        const rgb = hexRgb(color.trim());
        red = rgb.red;
        green = rgb.green;
        blue = rgb.blue;
    }

    // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
    const hsp = Math.sqrt(
        0.299 * (red * red) +
        0.587 * (green * green) +
        0.114 * (blue * blue)
    );

    return hsp > 130;
}
