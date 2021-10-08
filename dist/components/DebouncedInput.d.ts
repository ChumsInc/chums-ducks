import React, { InputHTMLAttributes, RefObject } from 'react';
export interface DebouncedInputProps extends InputHTMLAttributes<any> {
    bsSize?: 'sm' | 'lg';
    myRef?: RefObject<HTMLInputElement>;
    wait?: number;
    fuzzyList?: boolean;
}
declare const DebouncedInput: React.FC<DebouncedInputProps>;
export default DebouncedInput;
