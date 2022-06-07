import React from 'react';
export interface StatusButtonGroupProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
}
declare const StatusButtonGroup: React.FC<StatusButtonGroupProps>;
export default StatusButtonGroup;
