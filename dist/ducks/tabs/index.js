import { combineReducers } from 'redux';
export const tabListCreated = 'app/tabs/tabs-created';
export const tabSelected = 'app/tabs/tab-selected';
export const tabAdded = 'app/tabs/tab-added';
export const tabRemoved = 'app/tabs/tab-removed';
export const tabDisabled = 'app/tabs/tab-disabled';
export const onTabListCreated = (list) => ({ type: tabListCreated, payload: { list } });
export const onTabSelected = (id) => ({ type: tabSelected, payload: { id } });
export const onTabAdded = (tab) => ({ type: tabAdded, payload: { tab } });
export const onTabRemoved = (id) => ({ type: tabRemoved, payload: { id } });
export const onTabDisabled = (id) => ({ type: tabDisabled, payload: { id } });
export const tabListSelector = (state) => state.tabs.list;
export const selectedTabSelector = (state) => {
    const { list, selected } = state.tabs;
    const [id] = list.filter(tab => tab.id === selected).map(tab => tab.id);
    return id || '';
};
export const tabSelector = (id) => (state) => {
    const [tab] = state.tabs.list.filter(tab => tab.id === id);
    return tab;
};
const listReducer = (state = [], action) => {
    const { type, payload } = action;
    const { id, tab, list = [] } = payload || {};
    switch (type) {
        case tabListCreated:
            return [...list];
        case tabAdded:
            if (!tab) {
                return state;
            }
            return [...state, tab];
        case tabRemoved:
            if (!id) {
                return state;
            }
            return state.filter(tab => tab.id !== id);
        case tabDisabled:
            if (!id) {
                return state;
            }
            return state.map(tab => (Object.assign(Object.assign({}, tab), { disabled: tab.id === id })));
        default:
            return state;
    }
};
const selectedReducer = (state = '', action) => {
    const { type, payload } = action;
    switch (type) {
        case tabSelected:
            return payload.id || '';
        case tabAdded:
            if (!payload.tab) {
                return state;
            }
            return payload.tab.id;
        case tabRemoved:
        case tabDisabled:
            if (payload.id === state) {
                return '';
            }
            return state;
        case tabListCreated:
            if (payload.list) {
                const [id = ''] = payload.list.filter(tab => tab.active).map(tab => tab.id);
                return id;
            }
            return state;
        default:
            return state;
    }
};
export default combineReducers({
    list: listReducer,
    selected: selectedReducer,
});
//# sourceMappingURL=index.js.map