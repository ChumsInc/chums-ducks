import React, { RefObject, TextareaHTMLAttributes } from 'react';
export interface TextAreaProps extends TextareaHTMLAttributes<any> {
    bsSize?: 'sm' | 'lg';
    myRef?: RefObject<HTMLTextAreaElement>;
}
declare const TextArea: React.FC<TextAreaProps>;
export default TextArea;
