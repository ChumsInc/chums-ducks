import React, { SelectHTMLAttributes } from "react";
import { BootstrapSize } from "../types";
export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    bsSize?: BootstrapSize;
}
declare const Select: React.FC<SelectProps>;
export default Select;
