import React, { createRef, useEffect, useState } from "react";
import classNames from "classnames";
import { noop } from "../utils";
var Modal = function (_a) {
    var title = _a.title, _b = _a.size, size = _b === void 0 ? 'md' : _b, header = _a.header, footer = _a.footer, _c = _a.canClose, canClose = _c === void 0 ? true : _c, scrollable = _a.scrollable, centered = _a.centered, staticBackdrop = _a.staticBackdrop, dialogClassName = _a.dialogClassName, _d = _a.visible, visible = _d === void 0 ? true : _d, _e = _a.onClose, onClose = _e === void 0 ? noop : _e, children = _a.children;
    var modalRef = createRef();
    var fadeTimer = 0;
    var _f = useState(false), showModal = _f[0], setShowModal = _f[1];
    var _g = useState(visible ? 'block' : 'none'), display = _g[0], setDisplay = _g[1];
    useEffect(function () {
        if (visible) {
            delayShowingModal();
        }
        else {
            delayClose();
        }
    }, [visible]);
    var showBackdrop = function (state) {
        var _a;
        (_a = document.querySelector('.modal-backdrop')) === null || _a === void 0 ? void 0 : _a.classList.toggle('show', state);
    };
    var closeHandler = function (ev) {
        if (!canClose) {
            return;
        }
        if (ev) {
            ev.preventDefault();
        }
        delayClose();
    };
    var onClickBackdrop = function (ev) {
        var target = ev.target;
        if (!staticBackdrop && target && target.classList.contains('modal')) {
            closeHandler();
        }
    };
    var onEscape = function (ev) {
        if (ev.key === 'Escape') {
            closeHandler();
        }
    };
    var delayShowingModal = function () {
        setDisplay('block');
        document.querySelectorAll('body').forEach(function (body) {
            body.classList.toggle('modal-open', true);
            var div = document.createElement('div');
            div.className = 'modal-backdrop fade';
            body.appendChild(div);
        });
        clearTimeout(fadeTimer);
        fadeTimer = window.setTimeout(function () {
            showBackdrop(true);
            setShowModal(true);
        }, 300);
    };
    var delayClose = function () {
        clearTimeout(fadeTimer);
        setShowModal(false);
        showBackdrop(false);
        fadeTimer = window.setTimeout(function () {
            var _a, _b;
            (_a = document.querySelector('.modal-backdrop')) === null || _a === void 0 ? void 0 : _a.remove();
            (_b = document.querySelector('body')) === null || _b === void 0 ? void 0 : _b.classList.toggle('modal-open', false);
            setDisplay('none');
            onClose();
        }, 300);
    };
    useEffect(function () {
        return function () {
            var _a, _b;
            clearTimeout(fadeTimer);
            (_a = document.querySelector('body')) === null || _a === void 0 ? void 0 : _a.classList.toggle('modal-open', false);
            (_b = document.querySelector('.modal-backdrop')) === null || _b === void 0 ? void 0 : _b.remove();
        };
    }, []);
    useEffect(function () {
        var _a;
        if (showModal) {
            (_a = modalRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        }
    }, [showModal]);
    var className = {
        'modal-dialog-scrollable': scrollable,
        'modal-dialog-centered': centered,
    };
    return (React.createElement("div", { className: classNames("modal fade", { show: showModal }), tabIndex: -1, ref: modalRef, style: { display: display }, onClick: onClickBackdrop, onKeyDown: onEscape },
        React.createElement("div", { className: classNames("modal-dialog", "modal-" + size, className, dialogClassName) },
            React.createElement("div", { className: "modal-content" },
                !!header && header,
                !header && (!!title || canClose) && (React.createElement("div", { className: "modal-header" },
                    React.createElement("h5", { className: "modal-title" }, title || 'Modal Title'),
                    canClose && (React.createElement("button", { type: "button", className: "btn-close", onClick: closeHandler, "aria-label": "Close" })))),
                React.createElement("div", { className: "modal-body" }, children || 'modal body goes here'),
                !!footer && footer))));
};
export default Modal;
//# sourceMappingURL=Modal.js.map