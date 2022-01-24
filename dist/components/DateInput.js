"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateFromInputValue = exports.inputDate = exports.formatInputDate = void 0;
const react_1 = __importDefault(require("react"));
const Input_1 = __importDefault(require("./Input"));
const formatInputDate = (date) => {
    return [
        String(date.getFullYear()).padStart(4, '0'),
        String(date.getMonth() + 1).padStart(2, '0'),
        String(date.getDate()).padStart(2, '0')
    ].join('-');
};
exports.formatInputDate = formatInputDate;
const inputDate = (date) => {
    if (date instanceof Date) {
        return (0, exports.formatInputDate)(date);
    }
    if (typeof date === 'number') {
        return (0, exports.formatInputDate)(new Date(date));
    }
    if (/^\d{4}-\d{2}-\d{2}$/.test(date)) {
        const d = (0, exports.dateFromInputValue)(date);
        return d instanceof Date ? (0, exports.formatInputDate)(d) : '';
    }
    const d = new Date(date);
    if (!isNaN(d.valueOf())) {
        return (0, exports.formatInputDate)(d);
    }
    return '';
};
exports.inputDate = inputDate;
const dateFromInputValue = (value) => {
    const date = new Date(value);
    if (isNaN(date.valueOf())) {
        return null;
    }
    return new Date(date.valueOf() + date.getTimezoneOffset() * 60 * 1000);
};
exports.dateFromInputValue = dateFromInputValue;
const DateInput = ({ date, value, onChangeDate, onChange, ...rest }) => {
    const dateValue = (0, exports.inputDate)(date || value || new Date());
    const changeHandler = (ev) => {
        if (onChangeDate) {
            const date = (0, exports.dateFromInputValue)(ev.target.value);
            if (date) {
                return onChangeDate(date);
            }
            return;
        }
        if (onChange) {
            return onChange(ev);
        }
    };
    return (react_1.default.createElement(Input_1.default, { type: "date", value: dateValue, ...rest, onChange: changeHandler }));
};
exports.default = DateInput;
//# sourceMappingURL=DateInput.js.map