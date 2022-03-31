import React, {HTMLAttributes, useEffect, useState} from 'react';
import {fetchJSON} from "../utils";


export interface ItemSearchRecord {
    company: string,
    ItemCode: string,
    ItemCodeDesc: string,
    ProductType: string,
}

export interface ItemSearchFilter {
    productType?: string,
    productLine?: string,
    category?: string,
    subCategory?: string,
    baseSKU?: string,
}

function parseSearchParams(search: string, filter?: ItemSearchFilter): URLSearchParams {
    const params = new URLSearchParams();
    params.set('search', search)
    if (!filter) {
        return params;
    }
    const {productType, productLine, category, subCategory, baseSKU} = filter;
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


async function loadItemSearch(search: string, filter?: ItemSearchFilter, signal?: AbortSignal): Promise<ItemSearchRecord[]> {
    try {
        if (!search) {
            return [];
        }
        const params = parseSearchParams(search, filter)
        const url = `/api/search/item/chums/?${params.toString()}`
        const {result} = await fetchJSON<{ result: ItemSearchRecord[] }>(url, {signal});
        return result || []
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.log("loadItemSearch()", error.name, error.message);
            return Promise.reject(error);
        }
        console.error("loadItemSearch()", error);
        return [];
    }
}

export interface ItemDataListProps extends HTMLAttributes<HTMLDataListElement> {
    id: string,
    search: string,
    delay?: number,
    filter?: ItemSearchFilter,
}

export interface ItemDataListState {
    items: ItemSearchRecord[],
    timer: number,
}

const ItemDataList: React.FC<ItemDataListProps> = ({
                                                       id,
                                                       search,
                                                       delay = 600,
                                                       filter,
                                                       ...props
                                                   }) => {
    const controller = new AbortController();

    const [items, setItems] = useState<ItemSearchRecord[]>([]);
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        return () => {
            controller.abort();
            window.clearTimeout(timer);
        }
    }, []);

    useEffect(() => {
        window.clearTimeout(timer);
        const newTimer = window.setTimeout(async () => {
            try {
                const searchItems = await loadItemSearch(search, filter, controller.signal);
                setItems(searchItems || []);
            } catch (error: unknown) {
                if (error instanceof Error) {
                    console.log("ItemDataList.useEffect()", error.name, error.message);
                }
            }

        }, delay);
        setTimer(() => newTimer);
    }, [search]);


    return (
        <datalist id={id} {...props}>
            {items.map(item => (
                <option key={item.ItemCode} value={item.ItemCode} className={`item-data-list--${item.ProductType}`}>
                    {item.ItemCodeDesc}
                </option>
            ))}
        </datalist>
    )
}

export default ItemDataList;
