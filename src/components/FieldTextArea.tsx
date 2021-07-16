import React, {ChangeEvent} from "react";
import {InputField} from "../types";
import TextArea from "./TextArea";


interface FieldTextAreaProps {
    field?: string,
    value?: string | ReadonlyArray<string> | number,
    placeholder?: string,
    required?: boolean,
    readOnly?: boolean,
    disabled?: boolean,
    onChange?: ({field, value}: InputField) => void,
}

const FieldTextArea: React.FC<FieldTextAreaProps> = ({
                                                   field = '',
                                                   value,
                                                   placeholder,
                                                   required,
                                                   readOnly,
                                                   disabled,
                                                   onChange
                                               }) => {
    const changeHandler = (ev: ChangeEvent<HTMLTextAreaElement>) => {
        if (readOnly || !onChange) {
            return;
        }
        onChange({field, value: ev.target.value});
    }
    return (
        <TextArea value={value} onChange={changeHandler} placeholder={placeholder} required={required}
               readOnly={readOnly} disabled={disabled}/>
    )
}

export default FieldTextArea;
