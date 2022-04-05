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
const modifyTabSet = (state, key, tabsModifier) => {
    if (!state[key]) {
        return state;
    }
    const tabSet = tabsModifier(state[key]);
    return {
        ...state,
        [key]: tabSet,
    };
};
const addTabSetReducer = (list, id) => {
    return {
        list: [...list],
        selected: id || (list.length === 0 ? '' : list[0].id)
    };
};
const addTabReducer = (tab) => (tabs) => {
    if (tabs.list.filter(t => t.id === tab.id).length) {
        return tabs;
    }
    return {
        list: [...tabs.list, tab],
        selected: tabs.selected,
    };
};
const removeTabReducer = (id) => (tabs) => {
    const list = [...tabs.list.filter(t => t.id !== id)];
    return {
        list,
        selected: tabs.selected === id ? nextTabId({ ...tabs, list }, id) : tabs.selected
    };
};
const toggleTabDisabledReducer = (id, force) => (tabs) => {
    const list = tabs.list.map(tab => {
        if (tab.id !== id) {
            return tab;
        }
        return {
            ...tab,
            disabled: force === undefined ? !tab.disabled : !force
        };
    });
    return {
        list,
        selected: tabs.selected === id ? nextTabId({ ...tabs, list }, id) : tabs.selected
    };
};
const tabsReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case exports.tabsListCreated:
            if (!state[payload.key]) {
                const { list = [], id = '' } = payload;
                return {
                    ...state,
                    [payload.key]: addTabSetReducer(list, id)
                };
            }
            return state;
        case exports.tabsTabAdded:
            if (payload?.tab) {
                return modifyTabSet(state, payload.key, addTabReducer(payload.tab));
            }
            return state;
        case exports.tabsTabRemoved:
            if (payload?.id) {
                return modifyTabSet(state, payload.key, removeTabReducer(payload.id));
            }
            return state;
        case exports.tabsToggleTabStatus:
            if (payload?.id) {
                return modifyTabSet(state, payload.key, toggleTabDisabledReducer(payload.id, payload.status));
            }
            return state;
        case exports.tabsTabSelected:
            if (payload?.id) {
                return modifyTabSet(state, payload.key, (tabs) => ({ ...tabs, selected: payload.id || tabs.list[0].id || '' }));
            }
            return state;
        default:
            return state;
    }
};
exports.default = tabsReducer;
//# sourceMappingURL=index.js.map