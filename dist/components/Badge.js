import React from 'react';
import classNames from "classnames";
const Badge = ({ color, textColor, pill, text, className, description, children }) => {
    const styleClassName = {
        [`bg-${color}`]: !!color,
        [`text-${textColor}`]: !!textColor,
        'text-dark': !textColor && !!color && ['warning', 'info', 'light'].includes(color),
        'badge-pill': pill,
    };
    const badgeClassNames = classNames('badge', styleClassName, className);
    return (<span className={badgeClassNames} title={description}>
            {text || children || ''}
            {!!description && (<span className="visually-hidden">{description}</span>)}
        </span>);
};
export default Badge;
//# sourceMappingURL=Badge.js.map