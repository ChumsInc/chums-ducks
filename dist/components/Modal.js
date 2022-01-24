"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
const utils_1 = require("../utils");
const Modal = ({ title, size = 'md', header, footer, canClose = true, scrollable, centered, staticBackdrop, dialogClassName, visible = true, onClose = utils_1.noop, children, }) => {
    const modalRef = (0, react_1.createRef)();
    let fadeTimer = 0;
    const [showModal, setShowModal] = (0, react_1.useState)(false);
    const [display, setDisplay] = (0, react_1.useState)(visible ? 'block' : 'none');
    (0, react_1.useEffect)(() => {
        if (visible) {
            delayShowingModal();
        }
        else {
            delayClose();
        }
    }, [visible]);
    const showBackdrop = (state) => {
        document.querySelector('.modal-backdrop')?.classList.toggle('show', state);
    };
    const closeHandler = (ev) => {
        if (!canClose) {
            return;
        }
        if (ev) {
            ev.preventDefault();
        }
        delayClose();
    };
    const onClickBackdrop = (ev) => {
        const target = ev.target;
        if (!staticBackdrop && target && target.classList.contains('modal')) {
            closeHandler();
        }
    };
    const onEscape = (ev) => {
        if (ev.key === 'Escape') {
            closeHandler();
        }
    };
    const delayShowingModal = () => {
        setDisplay('block');
        document.querySelectorAll('body').forEach(body => {
            body.classList.toggle('modal-open', true);
            const div = document.createElement('div');
            div.className = 'modal-backdrop fade';
            body.appendChild(div);
        });
        clearTimeout(fadeTimer);
        fadeTimer = window.setTimeout(() => {
            showBackdrop(true);
            setShowModal(true);
        }, 300);
    };
    const delayClose = () => {
        clearTimeout(fadeTimer);
        setShowModal(false);
        showBackdrop(false);
        fadeTimer = window.setTimeout(() => {
            document.querySelector('.modal-backdrop')?.remove();
            document.querySelector('body')?.classList.toggle('modal-open', false);
            setDisplay('none');
            onClose();
        }, 300);
    };
    (0, react_1.useEffect)(() => {
        return () => {
            clearTimeout(fadeTimer);
            document.querySelector('body')?.classList.toggle('modal-open', false);
            document.querySelector('.modal-backdrop')?.remove();
        };
    }, []);
    (0, react_1.useEffect)(() => {
        if (showModal) {
            modalRef.current?.focus();
        }
    }, [showModal]);
    const className = {
        'modal-dialog-scrollable': scrollable,
        'modal-dialog-centered': centered,
    };
    return (react_1.default.createElement("div", { className: (0, classnames_1.default)("modal fade", { show: showModal }), tabIndex: -1, ref: modalRef, style: { display: display }, onClick: onClickBackdrop, onKeyDown: onEscape },
        react_1.default.createElement("div", { className: (0, classnames_1.default)("modal-dialog", `modal-${size}`, className, dialogClassName) },
            react_1.default.createElement("div", { className: "modal-content" },
                !!header && header,
                !header && (!!title || canClose) && (react_1.default.createElement("div", { className: "modal-header" },
                    react_1.default.createElement("h5", { className: "modal-title" }, title || 'Modal Title'),
                    canClose && (react_1.default.createElement("button", { type: "button", className: "btn-close", onClick: closeHandler, "aria-label": "Close" })))),
                react_1.default.createElement("div", { className: "modal-body" }, children || 'modal body goes here'),
                !!footer && footer))));
};
exports.default = Modal;
//# sourceMappingURL=Modal.js.map