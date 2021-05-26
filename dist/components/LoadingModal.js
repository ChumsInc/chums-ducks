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
const LoadingModal = (_a) => {
    var { title = 'Loading', percent = 100, color = 'secondary', canClose = false } = _a, rest = __rest(_a, ["title", "percent", "color", "canClose"]);
    return (React.createElement(Modal, Object.assign({ title: title, canClose: canClose }, rest),
        React.createElement(Progress, null,
            React.createElement(ProgressBar, { value: percent, animated: true, color: color }))));
};
export default LoadingModal;
//# sourceMappingURL=LoadingModal.js.map