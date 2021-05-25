import React, {InputHTMLAttributes, Ref} from 'react';
import classNames from "classnames";

const noop = () => {
};

export interface InputProps extends InputHTMLAttributes<any> {
    bsSize?: 'sm' | 'lg',
    myRef?: Ref<HTMLInputElement>,
}

const Input: React.FC<InputProps> = ({
                                         bsSize = 'sm',
                                         myRef,
                                         type = 'text',
                                         className = '',
                                         value,
                                         onChange = noop,
                                         ...rest
                                     }) => {
    const inputClassName = {
        'form-control': true,
        [`form-control-${bsSize}`]: !!bsSize,
    }
    return (
        <input type={type}
               className={classNames(inputClassName, className)}
               value={value || ''}
               onChange={onChange}
               ref={myRef} {...rest} />
    )
}
export default Input;
