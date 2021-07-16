import React from 'react';
import classNames from 'classnames';
import "./Pagination.css";
import PageButton from "./PageButton";
const PAGE_LABELS = {
    prev: '‹',
    ellipsis: '…',
    next: '›',
};
const DEFAULT_MAX_PAGES = 9;
const Pagination = ({ page, pages, filtered, className, maxButtons = DEFAULT_MAX_PAGES, onSelectPage }) => {
    const onSelect = (nextPage) => {
        if (!nextPage || nextPage < 1 || nextPage > pages) {
            return;
        }
        onSelectPage(nextPage);
    };
    const hasMore = pages > maxButtons;
    const maxPageButtons = pages > maxButtons ? maxButtons - 2 : maxButtons;
    let renderPages = [];
    const pageRange = Math.floor(maxPageButtons / 2);
    const beforeRender = Math.min(page - pageRange, pages - maxPageButtons);
    const afterRender = Math.max(page + pageRange, maxPageButtons);
    const firstEllipsis = [];
    const lastEllipsis = [];
    for (let i = 2; i < pages; i += 1) {
        if (i <= beforeRender) {
            firstEllipsis.push(i);
        }
        else if (i < afterRender) {
            renderPages.push(i);
        }
        else {
            lastEllipsis.push(i);
        }
    }
    return (React.createElement("nav", { "aria-label": "Page Navigation" },
        React.createElement("ul", { className: classNames("pagination pagination-sm", className, { filtered }) },
            hasMore && (React.createElement(PageButton, { page: page - 1, label: PAGE_LABELS.prev, disabled: page <= 1, onClick: onSelect })),
            React.createElement(PageButton, { page: 1, onClick: onSelect, isCurrent: page === 1 }),
            hasMore && firstEllipsis.length === 1 && (React.createElement(PageButton, { page: firstEllipsis[0], label: firstEllipsis[0] })),
            hasMore && firstEllipsis.length > 1 && (React.createElement(PageButton, { page: 0, label: PAGE_LABELS.ellipsis, disabled: true })),
            renderPages.map(p => (React.createElement(PageButton, { key: p, page: p, isCurrent: p === page, onClick: onSelect }))),
            hasMore && lastEllipsis.length === 1 && (React.createElement(PageButton, { page: lastEllipsis[0], label: lastEllipsis[0] })),
            hasMore && lastEllipsis.length > 1 && (React.createElement(PageButton, { page: 0, label: PAGE_LABELS.ellipsis, disabled: true })),
            pages > 1 && (React.createElement(PageButton, { page: pages, isCurrent: page === pages, label: pages, onClick: onSelect })),
            hasMore && (React.createElement(PageButton, { page: page + 1, label: PAGE_LABELS.next, onClick: onSelect, disabled: page === pages })))));
};
export default Pagination;
//# sourceMappingURL=Pagination.js.map