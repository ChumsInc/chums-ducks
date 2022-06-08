"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLightColor = void 0;
const hex_rgb_1 = __importDefault(require("hex-rgb"));
const rgbaTest = /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\);*$/;
function isLightColor(color) {
    // Variables for red, green, blue values
    let red;
    let green;
    let blue;
    // Check the format of the color, HEX or RGB?
    if (color.trim().match(/^rgb/)) {
        // If RGB --> store the red, green, blue values in separate variables
        const [, _r, _g, _b] = color.trim().match(rgbaTest) || [];
        red = +_r;
        green = +_g;
        blue = +_b;
    }
    else {
        const rgb = (0, hex_rgb_1.default)(color.trim());
        red = rgb.red;
        green = rgb.green;
        blue = rgb.blue;
    }
    // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
    const hsp = Math.sqrt(0.299 * (red * red) +
        0.587 * (green * green) +
        0.114 * (blue * blue));
    return hsp > 130;
}
exports.isLightColor = isLightColor;
//# sourceMappingURL=color.js.map