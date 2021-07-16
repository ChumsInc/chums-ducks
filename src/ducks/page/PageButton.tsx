import React from 'react';
import classNames from "classnames";

interface PageButtonProps {
    page: number,
    label?: string | number,
    isCurrent?: boolean,
    disabled?: boolean,
    onClick?: (page: number) => void,
}


const CurrentPageButton: React.FC<PageButtonProps> = ({
                                                          page,
                                                          label = null
}) => {
    return (
        <li className={classNames('page-item active')}>
            <span className="page-link">{label || page}</span>
        </li>
    )
};

const SelectablePageButton: React.FC<PageButtonProps> = ({
                                                             page,
                                                             label = null,
                                                             disabled = false,
                                                             onClick
                                                         }) => {
    const handleClick = (ev: React.MouseEvent) => {
        ev.preventDefault();
        if (onClick) {
            onClick(page);
        }
    };
    return (
        <li className={classNames('page-item', {disabled: disabled})}>
            <a href="#" className='page-link' onClick={handleClick}>{label || page}</a>
        </li>
    )
};

const PageButton: React.FC<PageButtonProps> = ({
                                                   page,
                                                   label = '',
                                                   disabled = false,
                                                   isCurrent = false,
                                                   onClick
                                               }) => {
    return (
        isCurrent
            ? <CurrentPageButton page={page} label={label}/>
            : <SelectablePageButton page={page} label={label} disabled={disabled} onClick={onClick}/>
    )
};

export default PageButton;
