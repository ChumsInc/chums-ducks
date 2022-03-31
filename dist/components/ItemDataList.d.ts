import React, { HTMLAttributes } from 'react';
export interface ItemSearchRecord {
    company: string;
    ItemCode: string;
    ItemCodeDesc: string;
    ProductType: string;
}
export interface ItemSearchFilter {
    productType?: string;
    productLine?: string;
    category?: string;
    subCategory?: string;
    baseSKU?: string;
}
export interface ItemDataListProps extends HTMLAttributes<HTMLDataListElement> {
    id: string;
    search: string;
    delay?: number;
    filter?: ItemSearchFilter;
}
export interface ItemDataListState {
    items: ItemSearchRecord[];
    timer: number;
}
declare const ItemDataList: React.FC<ItemDataListProps>;
export default ItemDataList;
