"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
require("./Pagination.css");
const PageButton_1 = __importDefault(require("./PageButton"));
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
    return (react_1.default.createElement("nav", { "aria-label": "Page Navigation" },
        react_1.default.createElement("ul", { className: (0, classnames_1.default)("pagination pagination-sm", className, { filtered }) },
            hasMore && (react_1.default.createElement(PageButton_1.default, { page: page - 1, label: PAGE_LABELS.prev, disabled: page <= 1, onClick: onSelect })),
            react_1.default.createElement(PageButton_1.default, { page: 1, onClick: onSelect, isCurrent: page === 1 }),
            hasMore && firstEllipsis.length === 1 && (react_1.default.createElement(PageButton_1.default, { page: firstEllipsis[0], label: firstEllipsis[0] })),
            hasMore && firstEllipsis.length > 1 && (react_1.default.createElement(PageButton_1.default, { page: 0, label: PAGE_LABELS.ellipsis, disabled: true })),
            renderPages.map(p => (react_1.default.createElement(PageButton_1.default, { key: p, page: p, isCurrent: p === page, onClick: onSelect }))),
            hasMore && lastEllipsis.length === 1 && (react_1.default.createElement(PageButton_1.default, { page: lastEllipsis[0], label: lastEllipsis[0] })),
            hasMore && lastEllipsis.length > 1 && (react_1.default.createElement(PageButton_1.default, { page: 0, label: PAGE_LABELS.ellipsis, disabled: true })),
            pages > 1 && (react_1.default.createElement(PageButton_1.default, { page: pages, isCurrent: page === pages, label: pages, onClick: onSelect })),
            hasMore && (react_1.default.createElement(PageButton_1.default, { page: page + 1, label: PAGE_LABELS.next, onClick: onSelect, disabled: page === pages })))));
};
exports.default = Pagination;
//# sourceMappingURL=Pagination.js.map