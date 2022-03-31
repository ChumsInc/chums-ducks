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

const tabsReducer = (state: TabsState = initialState, action: TabAction): TabsState => {
    const {type, payload} = action;
    switch (type) {
    case tabsListCreated:
        if (!state[payload.key]) {
            const {list = [], id = ''} = payload;
            return {
                ...state,
                [payload.key]: {
                    list: [...list],
                    selected: id || (list.length === 0 ? '' : list[0].id),
                }
            }
        }
        return state;
    case tabsTabAdded:
        if (state[payload.key] && payload?.tab) {
            return {
                ...state,
                [payload.key]: {
                    list: [...state[payload.key].list, payload.tab],
                    selected: state[payload.key].selected,
                }
            }
        }
        return state;
    case tabsTabRemoved:
        if (state[payload.key] && payload?.id) {
            const list = state[payload.key].list.filter(tab => tab.id !== payload.id);
            const selected = nextTabId(state[payload.key], payload.id);
            return {
                ...state,
                [payload.key]: {
                    list: [...list],
                    selected: selected,
                }
            }
        }
        return state;
    case tabsToggleTabStatus:
        if (state[payload.key] && payload?.id) {
            const tabSet = {...state[payload.key]};
            tabSet.list
                .filter(tab => tab.id === payload.id)
                .forEach(tab => {
                    tab.disabled = payload.status !== undefined ? !payload.status : !tab.disabled;
                });

            if (tabSet.selected === payload.id) {
                tabSet.selected = nextTabId(tabSet, payload.id);
            }

            return {
                ...state,
                [payload.key]: tabSet
            }
        }
        return state;
    case tabsTabSelected:
        if (state[payload.key] && payload?.id) {
            return {
                ...state,
                [payload.key]: {
                    list: state[payload.key].list,
                    selected: payload.id}
            }
        }
        return state;
    default:
        return state;
    }
}

export default tabsReducer;
