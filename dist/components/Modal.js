import React, { createRef, useEffect, useState } from "react";
import classNames from "classnames";
const noop = () => {
};
const Modal = ({ title, size = 'md', header, footer, canClose = true, scrollable, centered, staticBackdrop, dialogClassName, visible = true, onClose = noop, children, }) => {
    const modalRef = createRef();
    let fadeTimer = 0;
    const [showModal, setShowModal] = useState(false);
    const [display, setDisplay] = useState(visible ? 'block' : 'none');
    useEffect(() => {
        if (visible) {
            delayShowingModal();
        }
        else {
            delayClose();
        }
    }, [visible]);
    const showBackdrop = (state) => {
        var _a;
        (_a = document.querySelector('.modal-backdrop')) === null || _a === void 0 ? void 0 : _a.classList.toggle('show', state);
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
            var _a, _b;
            (_a = document.querySelector('.modal-backdrop')) === null || _a === void 0 ? void 0 : _a.remove();
            (_b = document.querySelector('body')) === null || _b === void 0 ? void 0 : _b.classList.toggle('modal-open', false);
            setDisplay('none');
            onClose();
        }, 300);
    };
    useEffect(() => {
        return () => {
            var _a, _b;
            clearTimeout(fadeTimer);
            (_a = document.querySelector('body')) === null || _a === void 0 ? void 0 : _a.classList.toggle('modal-open', false);
            (_b = document.querySelector('.modal-backdrop')) === null || _b === void 0 ? void 0 : _b.remove();
        };
    }, []);
    useEffect(() => {
        var _a;
        if (showModal) {
            (_a = modalRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        }
    }, [showModal]);
    const className = {
        'modal-dialog-scrollable': scrollable,
        'modal-dialog-centered': centered,
    };
    return (React.createElement("div", { className: classNames("modal fade", { show: showModal }), tabIndex: -1, ref: modalRef, style: { display: display }, onClick: onClickBackdrop, onKeyDown: onEscape },
        React.createElement("div", { className: classNames("modal-dialog", `modal-${size}`, className, dialogClassName) },
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