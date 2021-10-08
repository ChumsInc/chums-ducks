import React, { RefObject, TextareaHTMLAttributes } from 'react';
export interface DebouncedTextAreaProps extends TextareaHTMLAttributes<any> {
    bsSize?: 'sm' | 'lg';
    myRef?: RefObject<HTMLTextAreaElement>;
    wait?: number;
}
declare const DebouncedTextArea: React.FC<DebouncedTextAreaProps>;
export default DebouncedTextArea;
