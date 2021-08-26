import React, {ChangeEvent} from 'react';
import Input, {InputProps} from "./Input";

export const formatInputDate = (date:Date):string => {
    return [
        String(date.getFullYear()).padStart(4, '0'),
        String(date.getMonth() + 1).padStart(2, '0'),
        String(date.getDate()).padStart(2, '0')
    ].join('-')

}
export const inputDate = (date: Date | number | string | readonly string[]): string => {
    if (date instanceof Date) {
        return formatInputDate(date);
    }
    if (typeof  date === 'number') {
        return formatInputDate(new Date(date));
    }
    if (/^\d{4}-\d{2}-\d{2}$/.test(date as string)) {
        const d = dateFromInputValue(date as string);
        return d instanceof Date ? formatInputDate(d) : '';
    }
    const d = new Date(date as string);
    if (!isNaN(d.valueOf())) {
        return formatInputDate(d);
    }
    return '';
}

export const dateFromInputValue = (value: string): Date|null => {
    const date = new Date(value);
    if (isNaN(date.valueOf())) {
        return null;
    }
    return new Date(date.valueOf() + date.getTimezoneOffset() * 60 * 1000);
}

export interface DateInputProps extends InputProps {
    date?: Date|string|number|null,
    onChangeDate?: (date:Date|null) => void,
}

const DateInput: React.FC<DateInputProps> = ({date, value, onChangeDate, onChange, ...rest}) => {
    const dateValue = inputDate(date || value || new Date());
    const changeHandler = (ev:ChangeEvent<HTMLInputElement>) => {
        if (onChangeDate) {
            const date = dateFromInputValue(ev.target.value);
            if (date) {
                return onChangeDate(date);
            }
            return;
        }
        if (onChange) {
            return onChange(ev);
        }
    }

    return (
        <Input type="date" value={dateValue} {...rest} onChange={changeHandler} />
    )
}
export default DateInput;
