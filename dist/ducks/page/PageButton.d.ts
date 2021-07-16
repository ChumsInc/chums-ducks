import React from 'react';
interface PageButtonProps {
    page: number;
    label?: string | number;
    isCurrent?: boolean;
    disabled?: boolean;
    onClick?: (page: number) => void;
}
declare const PageButton: React.FC<PageButtonProps>;
export default PageButton;
