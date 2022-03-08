import React, {RefObject, TextareaHTMLAttributes, useRef} from 'react';
import classNames from "classnames";

const noop = () => {
};

export interface TextAreaProps extends TextareaHTMLAttributes<any> {
    bsSize?: 'sm' | 'lg',
    myRef?: RefObject<HTMLTextAreaElement>,
}

const TextArea: React.FC<TextAreaProps> = ({
                                               bsSize = '',
                                               myRef,
                                               className,
                                               value,
                                               onChange = noop,
                                               ...rest
                                           }) => {

    const inputRef = useRef<HTMLTextAreaElement>(null);
    const inputClassName = {
        'form-control': !/form-control-plaintext/.test(className || ''),
        [`form-control-${bsSize}`]: !!bsSize,
    }

    return (
        <textarea
            className={classNames(inputClassName, className)}
            value={value || ''}
            // onInput={changeHandler}
            onChange={onChange}
            ref={myRef || inputRef} {...rest} />
    )
}
export default TextArea;
