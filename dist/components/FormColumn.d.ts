import React, { ReactNode } from "react";
interface FormColumnProps {
    label: string;
    width?: number;
    className?: string;
    align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
    children: ReactNode;
}
declare const FormColumn: React.FC<FormColumnProps>;
export default FormColumn;
