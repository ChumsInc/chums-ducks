"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const lodash_debounce_1 = __importDefault(require("lodash.debounce"));
const utils_1 = require("../utils");
const noop = () => {
};
const DebouncedInput = ({ bsSize = '', wait = 350, fuzzyList, myRef, type = 'text', className, value, onChange = noop, onBlur, ...rest }) => {
    let _debounced;
    const delayedChange = (0, react_1.useCallback)(_debounced = (0, lodash_debounce_1.default)((ev) => onChange(ev), wait), []);
    const inputRef = (0, react_1.useRef)(null);
    const [localValue, setLocalValue] = (0, react_1.useState)(String(value) || '');
    (0, react_1.useEffect)(() => {
        return () => {
            _debounced?.cancel();
        };
    }, []);
    (0, react_1.useEffect)(() => {
        setLocalValue(String(value));
    }, [value]);
    const inputClassName = {
        'form-control': !/form-control-plaintext/.test(className || ''),
        [`form-control-${bsSize}`]: !!bsSize,
    };
    const changeHandler = (ev) => {
        setLocalValue(ev.target.value);
        if (!!rest.list && fuzzyList) {
            if (!!myRef && myRef.current) {
                myRef.current.pattern = (0, utils_1.getRegex)(ev.target.value).source;
                return;
            }
            if (inputRef.current) {
                inputRef.current.pattern = (0, utils_1.getRegex)(ev.target.value).source;
            }
        }
        delayedChange(ev);
    };
    const blurHandler = (ev) => {
        _debounced?.flush();
        if (onBlur) {
            onBlur(ev);
        }
    };
    return (react_1.default.createElement("input", { type: type, className: (0, classnames_1.default)(inputClassName, className), value: localValue || '', 
        // onInput={changeHandler}
        onBlur: blurHandler, onChange: changeHandler, ref: myRef || inputRef, ...rest }));
};
exports.default = DebouncedInput;
//# sourceMappingURL=DebouncedInput.js.map