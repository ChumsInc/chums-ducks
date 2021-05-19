import React, { createRef, useEffect, useState } from "react";
import classNames from "classnames";
const noop = () => {
};
const Modal = ({ title, size = 'md', footer, canClose = true, scrollable, centered, staticBackdrop, dialogClassName, onClose = noop, children, }) => {
    const modalRef = createRef();
    const [fadeTimer, setFadeTimer] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const showBackdrop = (state) => {
        var _a;
        (_a = document.querySelector('.modal-backdrop')) === null || _a === void 0 ? void 0 : _a.classList.toggle('show', state);
    };
    const closeHandler = (ev) => {
        if (!canClose) {
            return;
        }
        showBackdrop(false);
        setShowModal(false);
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
        clearTimeout(fadeTimer);
        setFadeTimer(window.setTimeout(() => {
            console.log('executing fadeTimer');
            showBackdrop(true);
            setShowModal(true);
        }, 300));
    };
    const delayClose = () => {
        clearTimeout(fadeTimer);
        setFadeTimer(window.setTimeout(() => {
            onClose();
        }, 300));
    };
    useEffect(() => {
        document.querySelectorAll('body').forEach(body => {
            body.classList.toggle('modal-open', true);
            const div = document.createElement('div');
            div.className = 'modal-backdrop fade';
            body.appendChild(div);
        });
        delayShowingModal();
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
    return (React.createElement("div", { className: classNames("modal fade", { show: showModal }), tabIndex: -1, ref: modalRef, style: { display: 'block' }, onClick: onClickBackdrop, onKeyDown: onEscape },
        React.createElement("div", { className: classNames("modal-dialog", `modal-${size}`, className, dialogClassName) },
            React.createElement("div", { className: "modal-content" },
                React.createElement("div", { className: "modal-header" },
                    React.createElement("h5", { className: "modal-title" }, title || 'Modal Title'),
                    canClose && (React.createElement("button", { type: "button", className: "btn-close", onClick: closeHandler, "aria-label": "Close" }))),
                React.createElement("div", { className: "modal-body" }, children || 'modal body goes here'),
                !!footer && footer))));
};
export default Modal;
//# sourceMappingURL=Modal.js.map