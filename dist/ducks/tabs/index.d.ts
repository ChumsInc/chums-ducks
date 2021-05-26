import { Action } from 'redux';
import { RootState } from "../index";
import { Tab } from "../../types";
export declare const tabListCreated = "app/tabs/tabs-created";
export declare const tabSelected = "app/tabs/tab-selected";
export declare const tabAdded = "app/tabs/tab-added";
export declare const tabRemoved = "app/tabs/tab-removed";
export declare const tabDisabled = "app/tabs/tab-disabled";
export interface TabAction extends Action {
    payload: {
        id?: string;
        tab?: Tab;
        list?: Tab[];
    };
}
export declare const onTabListCreated: (list: Tab[]) => TabAction;
export declare const onTabSelected: (id: string) => TabAction;
export declare const onTabAdded: (tab: Tab) => TabAction;
export declare const onTabRemoved: (id: string) => TabAction;
export declare const onTabDisabled: (id: string) => TabAction;
export declare const tabListSelector: (state: RootState) => Tab[];
export declare const selectedTabSelector: (state: RootState) => string;
export declare const tabSelector: (id: string) => (state: RootState) => Tab;
declare const _default: import("redux").Reducer<import("redux").CombinedState<{
    list: Tab[];
    selected: string;
}>, TabAction>;
export default _default;
