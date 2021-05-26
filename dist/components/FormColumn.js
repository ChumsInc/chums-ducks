import React from "react";
import classNames from "classnames";
const FormColumn = ({ label, width = 8, className, children }) => {
    const labelClassName = {
        [`col-${12 - width}`]: !!width,
        'col-auto': !width,
        'form-label': true,
    };
    const containerClassName = {
        [`col-${width}`]: !!width,
        'col': !width,
    };
    return (React.createElement("div", { className: classNames('row g-3', className) },
        React.createElement("label", { className: classNames(labelClassName) }, label),
        React.createElement("div", { className: classNames(containerClassName) }, children)));
};
export default FormColumn;
//# sourceMappingURL=FormColumn.js.map