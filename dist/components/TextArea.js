var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useCallback, useEffect, useRef, useState } from 'react';
import classNames from "classnames";
import debounce from 'lodash.debounce';
const noop = () => {
};
const TextArea = (_a) => {
    var { bsSize = 'sm', wait = 350, myRef, className, value, onChange = noop, onBlur } = _a, rest = __rest(_a, ["bsSize", "wait", "myRef", "className", "value", "onChange", "onBlur"]);
    let _debounced;
    const delayedChange = useCallback(debounce((ev) => {
        console.log('useCallback (debounced)', ev.target, ev.target.value);
        onChange(ev);
    }, wait), []);
    const inputRef = useRef(null);
    const [localValue, setLocalValue] = useState(String(value));
    useEffect(() => {
        return () => {
            _debounced === null || _debounced === void 0 ? void 0 : _debounced.cancel();
        };
    }, []);
    useEffect(() => {
        setLocalValue(String(value));
    }, [value]);
    const inputClassName = {
        'form-control': true,
        [`form-control-${bsSize}`]: !!bsSize,
    };
    const changeHandler = (ev) => {
        setLocalValue(ev.target.value);
        delayedChange(ev);
    };
    const blurHandler = (ev) => {
        _debounced === null || _debounced === void 0 ? void 0 : _debounced.flush();
        if (onBlur) {
            onBlur(ev);
        }
    };
    return (React.createElement("textarea", Object.assign({ className: classNames(inputClassName, className), value: localValue || '', 
        // onInput={changeHandler}
        onBlur: blurHandler, onChange: changeHandler, ref: myRef || inputRef }, rest)));
};
export default TextArea;
//# sourceMappingURL=TextArea.js.map