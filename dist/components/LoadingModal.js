var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
import React from "react";
import ProgressBar from "./ProgressBar";
import Modal from "./Modal";
import Progress from "./Progress";
var LoadingModal = function (_a) {
    var _b = _a.title, title = _b === void 0 ? 'Loading' : _b, _c = _a.percent, percent = _c === void 0 ? 100 : _c, _d = _a.color, color = _d === void 0 ? 'secondary' : _d, _e = _a.canClose, canClose = _e === void 0 ? false : _e, rest = __rest(_a, ["title", "percent", "color", "canClose"]);
    return (React.createElement(Modal, __assign({ title: title, canClose: canClose }, rest),
        React.createElement(Progress, null,
            React.createElement(ProgressBar, { value: percent, animated: true, color: color }))));
};
export default LoadingModal;
//# sourceMappingURL=LoadingModal.js.map