"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const utils_1 = require("../utils");
function parseSearchParams(search, filter) {
    const params = new URLSearchParams();
    params.set('search', search);
    if (!filter) {
        return params;
    }
    const { productType, productLine, category, subCategory, baseSKU } = filter;
    if (productType) {
        params.set('ProductType', productType);
    }
    if (productLine) {
        params.set('pl', productLine);
    }
    if (category) {
        params.set('cat', category);
    }
    if (subCategory) {
        params.set('subcat', subCategory);
    }
    if (baseSKU) {
        params.set('sku', baseSKU);
    }
    return params;
}
async function loadItemSearch(search, filter, signal) {
    try {
        if (!search) {
            return [];
        }
        const params = parseSearchParams(search, filter);
        const url = `/api/search/item/chums/?${params.toString()}`;
        const { result } = await (0, utils_1.fetchJSON)(url, { signal });
        return result || [];
    }
    catch (error) {
        if (error instanceof Error) {
            console.log("loadItemSearch()", error.name, error.message);
            return Promise.reject(error);
        }
        console.error("loadItemSearch()", error);
        return [];
    }
}
const ItemDataList = ({ id, search, delay = 600, filter, ...props }) => {
    const controller = new AbortController();
    const [items, setItems] = (0, react_1.useState)([]);
    const [timer, setTimer] = (0, react_1.useState)(0);
    (0, react_1.useEffect)(() => {
        return () => {
            controller.abort();
            window.clearTimeout(timer);
        };
    }, []);
    (0, react_1.useEffect)(() => {
        window.clearTimeout(timer);
        const newTimer = window.setTimeout(async () => {
            try {
                const searchItems = await loadItemSearch(search, filter, controller.signal);
                setItems(searchItems || []);
            }
            catch (error) {
                if (error instanceof Error) {
                    console.log("ItemDataList.useEffect()", error.name, error.message);
                }
            }
        }, delay);
        setTimer(() => newTimer);
    }, [search]);
    return (react_1.default.createElement("datalist", { id: id, ...props }, items.map(item => (react_1.default.createElement("option", { key: item.ItemCode, value: item.ItemCode, className: `item-data-list--${item.ProductType}` }, item.ItemCodeDesc)))));
};
exports.default = ItemDataList;
//# sourceMappingURL=ItemDataList.js.map