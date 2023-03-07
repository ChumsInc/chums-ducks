import React from 'react';
import classNames from 'classnames';
export interface FormCheckProps {
    id?: string;
    label: string;
    checked: boolean;
    onClick: () => void;
    inline?: boolean;
    className?: string | classNames.ArgumentArray;
    type: 'radio' | 'checkbox';
    disabled?: boolean;
}
declare const FormCheck: React.FC<FormCheckProps>;
export default FormCheck;
