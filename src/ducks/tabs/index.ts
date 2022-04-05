import {ActionInterface, ActionPayload} from "../types";
import {RootStateOrAny} from "react-redux";


export interface Tab {
    id: string,
    title: string,
    icon?: string,
    to?: string|object|((any:any) => string|object),
    canClose?: boolean,
    disabled?: boolean,
    active?: boolean,
}

export interface TabSet {
    list: Tab[],
    selected: string,
}

export interface TabPayload extends ActionPayload {
    key: string,
    id?: string,
    tab?: Tab,
    list?: Tab[],
    status?: boolean,
}

export interface TabAction extends ActionInterface {
    payload: TabPayload
}

export interface TabsState {
    [key: string]: TabSet
}

interface RootState extends RootStateOrAny {
    tabs: TabsState
}

const initialState: TabsState = {
    app: {list: [], selected: ''},
};

const defaultTabsKey = 'app';

export const tabsListCreated = 'tabs/list-created';
export const tabsTabSelected = 'tabs/tab-selected';
export const tabsTabAdded = 'tabs/tab-added';
export const tabsTabRemoved = 'tabs/tab-removed';
export const tabsToggleTabStatus = 'tabs/toggle-tab-status';


export const tabListCreatedAction = (list: Tab[], key: string = defaultTabsKey, selectedId?: string): TabAction => ({
    type: tabsListCreated,
    payload: {key, list, id: selectedId}
});

export const tabSelectedAction = (id: string, key: string = defaultTabsKey): TabAction => ({
    type: tabsTabSelected,
    payload: {key, id}
});

export const tabAddedAction = (tab: Tab, key: string = defaultTabsKey): TabAction => ({
    type: tabsTabAdded,
    payload: {key, tab}
});

export const tabRemovedAction = (id: string, key: string = defaultTabsKey): TabAction => ({
    type: tabsTabRemoved,
    payload: {key, id}
})

export const tabToggleStatusAction = (id: string, key: string = defaultTabsKey, force?: boolean): TabAction => ({
    type: tabsToggleTabStatus,
    payload: {key, id, status: force}
})

export const selectTabList = (key: string = defaultTabsKey) => (state: RootState) => {
    if (!state.tabs[key]) {
        return [];
    }
    return state.tabs[key].list;
}
export const tabListSelector = selectTabList;

export const selectCurrentTab = (key: string = defaultTabsKey) => (state: RootState): string => {
    if (!state.tabs[key]) {
        return '';
    }
    const {list = [], selected = ''} = state.tabs[key];
    const [id] = list.filter(tab => tab.id === selected).map(tab => tab.id);
    return id || '';
}
export const selectedTabSelector = selectCurrentTab;

export const selectTabById = (id: string, key: string = defaultTabsKey) => (state: RootState): Tab => {
    if (!state.tabs[key]) {
        return {id: '', title: ''};
    }
    const [tab] = state.tabs[key].list.filter(tab => tab.id === id);
    return tab;
}
export const tabSelector = selectTabById;

const nextTabId = (tabSet: TabSet, id: string) => {
    if (tabSet.selected === id) {
        let found: boolean = false;
        let newIndex: number = -1;
        tabSet.list.forEach((tab, index) => {
            if (found && newIndex === -1) {
                newIndex = index;
            }
            if (tab.id === id) {
                found = true;
            }
        });
        if (newIndex === -1) {
            newIndex = Math.max(tabSet.list.length - 1, 0);
        }
        return tabSet.list[newIndex].id;
    }
    return id;
}

const modifyTabSet = (state:TabsState, key: string, tabsModifier: (tabs:TabSet) => TabSet):TabsState => {
    if (!state[key]) {
        return state;
    }
    return {
        ...state,
        [key]: tabsModifier(state[key]),
    }
}

const addTabSetReducer = (list:Tab[], id?:string) =>   {
    return {
        list: [...list],
        selected: id || (list.length === 0 ? '' : list[0].id)
    }
}

const addTabReducer = (tab:Tab) => (tabs: TabSet):TabSet => {
    if (tabs.list.filter(t => t.id === tab.id).length) {
        return tabs;
    }
    return {
        list: [...tabs.list, tab],
        selected: tabs.selected,
    }
}

const removeTabReducer = (id:string) => (tabs:TabSet):TabSet => {
    const list = [...tabs.list.filter(t => t.id !== id)];
    return {
        list,
        selected: tabs.selected === id ? nextTabId({...tabs, list}, id) : tabs.selected
    }
}

const toggleTabDisabledReducer = (id:string, force?:boolean) => (tabs:TabSet):TabSet => {
    const list = tabs.list.map(tab => {
        if (tab.id !== id) {
            return tab;
        }
        return {
            ...tab,
            disabled: force === undefined ? !tab.disabled : force
        };
    });
    return {
        list,
        selected: tabs.selected === id ? nextTabId({...tabs, list}, id) : tabs.selected
    }
}


const tabsReducer = (state: TabsState = initialState, action: TabAction): TabsState => {
    const {type, payload} = action;
    switch (type) {
    case tabsListCreated:
        if (!state[payload.key]) {
            const {list = [], id = ''} = payload;
            return modifyTabSet(state, payload.key, () => addTabSetReducer(list, id));
        }
        return state;
    case tabsTabAdded:
        if (payload?.tab) {
            return modifyTabSet(state, payload.key, addTabReducer(payload.tab));
        }
        return state;
    case tabsTabRemoved:
        if (payload?.id) {
            return modifyTabSet(state, payload.key, removeTabReducer(payload.id));
        }
        return state;
    case tabsToggleTabStatus:
        if (payload?.id) {
            return modifyTabSet(state, payload.key, toggleTabDisabledReducer(payload.id));
        }
        return state;
    case tabsTabSelected:
        if (payload?.id) {
            return modifyTabSet(state, payload.key, (tabs) => ({...tabs, selected: payload.id || tabs.list[0].id || ''}))
        }
        return state;
    default:
        return state;
    }
}

export default tabsReducer;
