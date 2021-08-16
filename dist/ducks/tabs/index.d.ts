import { ActionInterface } from "../types";
import { RootStateOrAny } from "react-redux";
export interface Tab {
    id: string;
    title: string;
    icon?: string;
    to?: string | object | ((any: any) => string | object);
    canClose?: boolean;
    disabled?: boolean;
    active?: boolean;
}
export interface TabSet {
    list: Tab[];
    selected: string;
}
export interface TabAction extends ActionInterface {
    payload?: {
        key: string;
        id?: string;
        tab?: Tab;
        list?: Tab[];
    };
}
export interface TabsState {
    [key: string]: TabSet;
}
interface RootState extends RootStateOrAny {
    tabs: TabsState;
}
export declare const tabListCreated = "tabs/tabs-created";
export declare const tabSelected = "tabs/tab-selected";
export declare const tabAdded = "tabs/tab-added";
export declare const tabRemoved = "tabs/tab-removed";
export declare const tabDisabled = "tabs/tab-disabled";
export declare const tabListCreatedAction: (list: Tab[], key?: string, selectedId?: string | undefined) => TabAction;
export declare const tabSelectedAction: (id: string, key?: string) => TabAction;
export declare const tabAddedAction: (tab: Tab, key?: string) => TabAction;
export declare const tabRemovedAction: (id: string, key?: string) => TabAction;
export declare const tabDisabledAction: (id: string, key?: string) => TabAction;
export declare const tabListSelector: (key?: string) => (state: RootState) => Tab[];
export declare const selectedTabSelector: (key?: string) => (state: RootState) => string;
export declare const tabSelector: (id: string, key?: string) => (state: RootState) => Tab;
declare const tabsReducer: (state: TabsState | undefined, action: TabAction) => TabsState;
export default tabsReducer;
