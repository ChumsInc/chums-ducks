import React from 'react';
import classNames from "classnames";
const CurrentPageButton = ({ page, label = null }) => {
    return (React.createElement("li", { className: classNames('page-item active') },
        React.createElement("span", { className: "page-link" }, label || page)));
};
const SelectablePageButton = ({ page, label = null, disabled = false, onClick }) => {
    const handleClick = (ev) => {
        ev.preventDefault();
        if (onClick) {
            onClick(page);
        }
    };
    return (React.createElement("li", { className: classNames('page-item', { disabled: disabled }) },
        React.createElement("a", { href: "#", className: 'page-link', onClick: handleClick }, label || page)));
};
const PageButton = ({ page, label = '', disabled = false, isCurrent = false, onClick }) => {
    return (isCurrent
        ? React.createElement(CurrentPageButton, { page: page, label: label })
        : React.createElement(SelectablePageButton, { page: page, label: label, disabled: disabled, onClick: onClick }));
};
export default PageButton;
//# sourceMappingURL=PageButton.js.map