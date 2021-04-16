import React from "react";
import classNames from 'classnames';
import numeral from "numeral";
import Badge from "../../components/Badge";
const Alert = ({ message, color = 'primary', title, className = '', context, count = 0, onDismiss, children }) => {
    const canDismiss = typeof onDismiss === 'function';
    const elClassName = {
        [`alert-${color}`]: !!color,
        'alert-dismissible': canDismiss,
    };
    return (<div className={classNames('alert my-3', elClassName, className)}>
            {!!context && (<strong className="me-1">[{context}]</strong>)}
            {!!title && (<strong className="me-1">{title}:</strong>)}
            {message || children || null}
            {!!count && count > 1 && (<Badge color={color} className="mx-3">{numeral(count).format('0,0')}</Badge>)}
            {canDismiss && (<button type="button" aria-label="close" onClick={onDismiss} className="btn-close"/>)}
        </div>);
};
export default Alert;
//# sourceMappingURL=Alert.js.map