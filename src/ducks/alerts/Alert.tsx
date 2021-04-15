import * as React from "react";
import classNames from 'classnames';
import numeral from "numeral";
import {BasicAlertType} from './index';
import Badge from "../../components/Badge";

export interface Props extends BasicAlertType {
    count?: number,
    onDismiss?: (args?: any) => void,
}

const Alert: React.FC<Props> = ({
                                    message,
                                    color = 'primary',
                                    title = null,
                                    className = '',
                                    context = null,
                                    count = 0,
                                    onDismiss,
                                    children
                                }) => {
    const canDismiss = typeof onDismiss === 'function';
    const elClassName = {
        'alert-dismissible': canDismiss,
    }

    return (
        <div className={classNames('alert my-3', `alert-${color}`, className, elClassName)}>
            {!!context && (<strong className="me-1">[{context}]</strong>)}
            {title && (<strong className="me-1">{title}:</strong>)}
            {message || children || null}
            {!!count && count > 1 && (
                <Badge color={color || 'danger'} className="mx-3">{numeral(count).format('0,0')}</Badge>
            )}
            {typeof onDismiss === 'function' && (
                <button type="button" aria-label="close" onClick={onDismiss} className="btn-close"/>
            )}
        </div>
    )
}

export default Alert;
