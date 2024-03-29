import { ActionInterface, ActionPayload } from "../types";
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
export interface TabPayload extends ActionPayload {
    key: string;
    id?: string;
    tab?: Tab;
    list?: Tab[];
    status?: boolean;
}
export interface TabAction extends ActionInterface {
    payload: TabPayload;
}
export interface TabsState {
    [key: string]: TabSet;
}
interface RootStateWithTabs {
    tabs: TabsState;
}
export declare const tabsListCreated = "tabs/list-created";
export declare const tabsTabSelected = "tabs/tab-selected";
export declare const tabsTabAdded = "tabs/tab-added";
export declare const tabsTabRemoved = "tabs/tab-removed";
export declare const tabsToggleTabStatus = "tabs/toggle-tab-status";
export declare const tabListCreatedAction: (list: Tab[], key?: string, selectedId?: string) => TabAction;
export declare const tabSelectedAction: (id: string, key?: string) => TabAction;
export declare const tabAddedAction: (tab: Tab, key?: string) => TabAction;
export declare const tabRemovedAction: (id: string, key?: string) => TabAction;
export declare const tabToggleStatusAction: (id: string, key?: string, force?: boolean) => TabAction;
export declare const selectTabList: (key?: string) => (state: RootStateWithTabs) => Tab[];
export declare const tabListSelector: (key?: string) => (state: RootStateWithTabs) => Tab[];
export declare const selectCurrentTab: (key?: string) => (state: RootStateWithTabs) => string;
export declare const selectedTabSelector: (key?: string) => (state: RootStateWithTabs) => string;
export declare const selectTabById: (id: string, key?: string) => (state: RootStateWithTabs) => Tab;
export declare const tabSelector: (id: string, key?: string) => (state: RootStateWithTabs) => Tab;
declare const tabsReducer: (state: TabsState | undefined, action: TabAction) => TabsState;
export default tabsReducer;
