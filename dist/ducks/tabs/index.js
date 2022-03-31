"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tabSelector = exports.selectTabById = exports.selectedTabSelector = exports.selectCurrentTab = exports.tabListSelector = exports.selectTabList = exports.tabToggleStatusAction = exports.tabRemovedAction = exports.tabAddedAction = exports.tabSelectedAction = exports.tabListCreatedAction = exports.tabsToggleTabStatus = exports.tabsTabRemoved = exports.tabsTabAdded = exports.tabsTabSelected = exports.tabsListCreated = void 0;
const initialState = {
    app: { list: [], selected: '' },
};
const defaultTabsKey = 'app';
exports.tabsListCreated = 'tabs/list-created';
exports.tabsTabSelected = 'tabs/tab-selected';
exports.tabsTabAdded = 'tabs/tab-added';
exports.tabsTabRemoved = 'tabs/tab-removed';
exports.tabsToggleTabStatus = 'tabs/toggle-tab-status';
const tabListCreatedAction = (list, key = defaultTabsKey, selectedId) => ({
    type: exports.tabsListCreated,
    payload: { key, list, id: selectedId }
});
exports.tabListCreatedAction = tabListCreatedAction;
const tabSelectedAction = (id, key = defaultTabsKey) => ({
    type: exports.tabsTabSelected,
    payload: { key, id }
});
exports.tabSelectedAction = tabSelectedAction;
const tabAddedAction = (tab, key = defaultTabsKey) => ({
    type: exports.tabsTabAdded,
    payload: { key, tab }
});
exports.tabAddedAction = tabAddedAction;
const tabRemovedAction = (id, key = defaultTabsKey) => ({
    type: exports.tabsTabRemoved,
    payload: { key, id }
});
exports.tabRemovedAction = tabRemovedAction;
const tabToggleStatusAction = (id, key = defaultTabsKey, force) => ({
    type: exports.tabsToggleTabStatus,
    payload: { key, id, status: force }
});
exports.tabToggleStatusAction = tabToggleStatusAction;
const selectTabList = (key = defaultTabsKey) => (state) => {
    if (!state.tabs[key]) {
        return [];
    }
    return state.tabs[key].list;
};
exports.selectTabList = selectTabList;
exports.tabListSelector = exports.selectTabList;
const selectCurrentTab = (key = defaultTabsKey) => (state) => {
    if (!state.tabs[key]) {
        return '';
    }
    const { list = [], selected = '' } = state.tabs[key];
    const [id] = list.filter(tab => tab.id === selected).map(tab => tab.id);
    return id || '';
};
exports.selectCurrentTab = selectCurrentTab;
exports.selectedTabSelector = exports.selectCurrentTab;
const selectTabById = (id, key = defaultTabsKey) => (state) => {
    if (!state.tabs[key]) {
        return { id: '', title: '' };
    }
    const [tab] = state.tabs[key].list.filter(tab => tab.id === id);
    return tab;
};
exports.selectTabById = selectTabById;
exports.tabSelector = exports.selectTabById;
const nextTabId = (tabSet, id) => {
    if (tabSet.selected === id) {
        let found = false;
        let newIndex = -1;
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
};
const tabsReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case exports.tabsListCreated:
            if (!state[payload.key]) {
                const { list = [], id = '' } = payload;
                return {
                    ...state,
                    [payload.key]: {
                        list: [...list],
                        selected: id || (list.length === 0 ? '' : list[0].id),
                    }
                };
            }
            return state;
        case exports.tabsTabAdded:
            if (state[payload.key] && payload?.tab) {
                return {
                    ...state,
                    [payload.key]: {
                        list: [...state[payload.key].list, payload.tab],
                        selected: state[payload.key].selected,
                    }
                };
            }
            return state;
        case exports.tabsTabRemoved:
            if (state[payload.key] && payload?.id) {
                const list = state[payload.key].list.filter(tab => tab.id !== payload.id);
                const selected = nextTabId(state[payload.key], payload.id);
                return {
                    ...state,
                    [payload.key]: {
                        list: [...list],
                        selected: selected,
                    }
                };
            }
            return state;
        case exports.tabsToggleTabStatus:
            if (state[payload.key] && payload?.id) {
                const tabSet = { ...state[payload.key] };
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
                };
            }
            return state;
        case exports.tabsTabSelected:
            if (state[payload.key] && payload?.id) {
                return {
                    ...state,
                    [payload.key]: {
                        list: state[payload.key].list,
                        selected: payload.id
                    }
                };
            }
            return state;
        default:
            return state;
    }
};
exports.default = tabsReducer;
//# sourceMappingURL=index.js.map