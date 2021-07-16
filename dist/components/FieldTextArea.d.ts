import React from "react";
import { InputField } from "../types";
interface FieldTextAreaProps {
    field?: string;
    value?: string | ReadonlyArray<string> | number;
    placeholder?: string;
    required?: boolean;
    readOnly?: boolean;
    disabled?: boolean;
    onChange?: ({ field, value }: InputField) => void;
}
declare const FieldTextArea: React.FC<FieldTextAreaProps>;
export default FieldTextArea;
