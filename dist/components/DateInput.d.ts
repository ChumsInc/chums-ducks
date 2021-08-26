import React from 'react';
import { InputProps } from "./Input";
export declare const formatInputDate: (date: Date) => string;
export declare const inputDate: (date: Date | number | string | readonly string[]) => string;
export declare const dateFromInputValue: (value: string) => Date | null;
export interface DateInputProps extends InputProps {
    date?: Date | string | number | null;
    onChangeDate?: (date: Date | null) => void;
}
declare const DateInput: React.FC<DateInputProps>;
export default DateInput;
