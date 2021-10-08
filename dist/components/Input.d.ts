import React, { InputHTMLAttributes, RefObject } from 'react';
export interface InputProps extends InputHTMLAttributes<any> {
    bsSize?: 'sm' | 'lg';
    myRef?: RefObject<HTMLInputElement>;
    fuzzyList?: boolean;
}
declare const Input: React.FC<InputProps>;
export default Input;
