import React from 'react';
export interface FormCheckProps {
    id?: string;
    label: string;
    checked: boolean;
    onClick: () => void;
    inline?: boolean;
    className?: string | object;
    type: 'radio' | 'checkbox';
    disabled?: boolean;
}
declare const FormCheck: React.FC<FormCheckProps>;
export default FormCheck;
