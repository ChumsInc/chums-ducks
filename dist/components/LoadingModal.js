"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ProgressBar_1 = __importDefault(require("./ProgressBar"));
const Modal_1 = __importDefault(require("./Modal"));
const Progress_1 = __importDefault(require("./Progress"));
const LoadingModal = ({ title = 'Loading', percent = 100, color = 'secondary', canClose = false, ...rest }) => {
    return (react_1.default.createElement(Modal_1.default, { title: title, canClose: canClose, ...rest },
        react_1.default.createElement(Progress_1.default, null,
            react_1.default.createElement(ProgressBar_1.default, { value: percent, animated: true, color: color }))));
};
exports.default = LoadingModal;
//# sourceMappingURL=LoadingModal.js.map