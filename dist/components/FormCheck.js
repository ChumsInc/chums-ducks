import React from 'react';
import classNames from 'classnames';
const FormCheck = ({ label, checked, onClick, inline = false, className = {}, type = "checkbox" }) => {
    return (React.createElement("div", { className: classNames("form-check", className, { "form-check-inline": inline }) },
        React.createElement("input", { type: type, className: "form-check-input", checked: checked, onChange: onClick }),
        React.createElement("label", { className: "form-check-label", onClick: onClick }, label)));
};
export default FormCheck;
//# sourceMappingURL=FormCheck.js.map