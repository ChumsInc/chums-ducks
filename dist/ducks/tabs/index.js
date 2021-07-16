const initialState = {
    app: { list: [], selected: '' },
};
const defaultTabsKey = 'app';
export const tabListCreated = 'tabs/tabs-created';
export const tabSelected = 'tabs/tab-selected';
export const tabAdded = 'tabs/tab-added';
export const tabRemoved = 'tabs/tab-removed';
export const tabDisabled = 'tabs/tab-disabled';
export const tabListCreatedAction = (list, key = defaultTabsKey) => ({ type: tabListCreated, payload: { key, list } });
export const tabSelectedAction = (id, key = defaultTabsKey) => ({ type: tabSelected, payload: { key, id } });
export const tabAddedAction = (tab, key = defaultTabsKey) => ({ type: tabAdded, payload: { key, tab } });
export const tabRemovedAction = (id, key = defaultTabsKey) => ({ type: tabRemoved, payload: { key, id } });
export const tabDisabledAction = (id, key = defaultTabsKey) => ({ type: tabDisabled, payload: { key, id } });
export const tabListSelector = (key = defaultTabsKey) => (state) => state.tabs[key].list;
export const selectedTabSelector = (key = defaultTabsKey) => (state) => {
    const { list, selected } = state.tabs[key];
    const [id] = list.filter(tab => tab.id === selected).map(tab => tab.id);
    return id || '';
};
export const tabSelector = (id, key = defaultTabsKey) => (state) => {
    const [tab] = state.tabs[key].list.filter(tab => tab.id === id);
    return tab;
};
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
    const { key = defaultTabsKey, tab, list = [], id = '' } = payload || {};
    const tabSet = state[key];
    switch (type) {
        case tabListCreated:
            return Object.assign(Object.assign({}, state), { [key]: {
                    list: [...list],
                    selected: list.length === 0 ? '' : list[0].id,
                } });
        case tabAdded:
            if (tabSet && tab) {
                return Object.assign(Object.assign({}, state), { [key]: {
                        list: [...tabSet.list, tab],
                        selected: tabSet.selected,
                    } });
            }
            return state;
        case tabRemoved:
            if (tabSet) {
                const list = tabSet.list.filter(tab => tab.id !== id);
                const selected = nextTabId(tabSet, id);
                return Object.assign(Object.assign({}, state), { [key]: {
                        list: [...list],
                        selected: selected,
                    } });
            }
            return state;
        case tabDisabled:
            if (tabSet) {
                const selected = nextTabId(tabSet, id);
                return Object.assign(Object.assign({}, state), { [key]: {
                        list: list.map(tab => (Object.assign(Object.assign({}, tab), { disabled: tab.id === id }))),
                        selected: selected,
                    } });
            }
            return state;
        case tabSelected:
            if (tabSet) {
                return Object.assign(Object.assign({}, state), { [key]: Object.assign(Object.assign({}, tabSet), { selected: id }) });
            }
            return state;
        default: return state;
    }
};
export default tabsReducer;
//# sourceMappingURL=index.js.map