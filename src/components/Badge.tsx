import React from 'react';
import classNames from "classnames";
import {BootstrapBGColor} from "../types";
import {default as tinyColor} from 'tinycolor2';

export interface Props {
    color: BootstrapBGColor,
    pill?: boolean,
    text?: string,
    className?: string | object,
    colorCode?: string,
    description?: string,
    children?: React.ReactNode
}

const Badge: React.FC<Props> = ({
                                    color,
                                    pill,
                                    text,
                                    className,
                                    colorCode,
                                    description,
                                    children
                                }) => {
    const c = tinyColor(colorCode);
    const _className = {
        'badge': true,
        'badge-pill': pill,
        [`bg-${color}`]: !!color,
        'text-list': !!colorCode && c.isDark(),
        'text-dark': !!colorCode && !c.isDark(),
    }

    const style: React.CSSProperties = {};
    if (color === 'custom' && !!colorCode) {
        style.backgroundColor = colorCode;
    }

    return (
        <span className={classNames(_className, className)} style={style}>
            {text || children || ''}
            {!!description && (<span className="visually-hidden">{description}</span>)}
        </span>
    )
};

export default Badge;
