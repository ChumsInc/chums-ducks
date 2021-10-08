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
                                         bsSize = 'sm',
                                         fuzzyList,
                                         myRef,
                                         type = 'text',
                                         className,
                                         value,
                                         onChange = noop,
                                         ...rest
                                     }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const inputClassName = {
        'form-control': true,
        [`form-control-${bsSize}`]: !!bsSize,
    }

    const changeHandler = (ev: ChangeEvent<HTMLInputElement>) => {
        if (!!rest.list && fuzzyList) {
            if (!!myRef && myRef.current) {
                myRef.current.pattern = getRegex(ev.target.value).source;
                return;
            }
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
               ref={myRef || inputRef} {...rest} />
    )
}
export default Input;
