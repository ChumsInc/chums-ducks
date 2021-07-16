import React from "react";
import { InputField } from "../types";
interface FieldInputProps {
    field?: string;
    value?: string | ReadonlyArray<string> | number;
    placeholder?: string;
    required?: boolean;
    readOnly?: boolean;
    disabled?: boolean;
    onChange?: ({ field, value }: InputField) => void;
}
declare const FieldInput: React.FC<FieldInputProps>;
export default FieldInput;
