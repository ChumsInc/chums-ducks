import React, {ChangeEvent, InputHTMLAttributes, RefObject, useRef} from 'react';
import classNames from "classnames";
import {getRegex} from "../utils";

const noop = () => {
};

export interface InputProps extends InputHTMLAttributes<any> {
    bsSize?: 'sm' | 'lg',
    myRef?: RefObject<HTMLInputElement>,
    fuzzyList?: boolean
}

const Input: React.FC<InputProps> = ({
                                         bsSize = '',
                                         fuzzyList,
                                         myRef,
                                         type = 'text',
                                         className,
                                         value,
                                         onChange = noop,
                                         ...rest
                                     }) => {
    const inputRef = myRef || useRef<HTMLInputElement>(null);

    const inputClassName = {
        'form-control': !/form-control-plaintext/.test(className || ''),
        [`form-control-${bsSize}`]: !!bsSize,
    }

    const changeHandler = (ev: ChangeEvent<HTMLInputElement>) => {
        if (!!rest.list && fuzzyList) {
            if (inputRef.current) {
                inputRef.current.pattern = getRegex(ev.target.value).source;
            }
        }
        onChange(ev);
    }

    return (
        <input type={type}
               className={classNames(inputClassName, className)}
               value={value || ''}
               onChange={changeHandler}
               ref={inputRef} {...rest} />
    )
}
export default Input;
