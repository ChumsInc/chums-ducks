import React from 'react';
export interface FormCheckProps {
    label: string;
    checked: boolean;
    onClick: () => void;
    inline?: boolean;
    className?: string | object;
    type: 'radio' | 'checkbox';
}
declare const FormCheck: React.FC<FormCheckProps>;
export default FormCheck;
