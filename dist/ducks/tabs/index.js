var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var initialState = {
    app: { list: [], selected: '' },
};
var defaultTabsKey = 'app';
export var tabListCreated = 'tabs/tabs-created';
export var tabSelected = 'tabs/tab-selected';
export var tabAdded = 'tabs/tab-added';
export var tabRemoved = 'tabs/tab-removed';
export var tabDisabled = 'tabs/tab-disabled';
export var tabListCreatedAction = function (list, key, selectedId) {
    if (key === void 0) { key = defaultTabsKey; }
    return ({
        type: tabListCreated,
        payload: { key: key, list: list, id: selectedId }
    });
};
export var tabSelectedAction = function (id, key) {
    if (key === void 0) { key = defaultTabsKey; }
    return ({
        type: tabSelected,
        payload: { key: key, id: id }
    });
};
export var tabAddedAction = function (tab, key) {
    if (key === void 0) { key = defaultTabsKey; }
    return ({
        type: tabAdded,
        payload: { key: key, tab: tab }
    });
};
export var tabRemovedAction = function (id, key) {
    if (key === void 0) { key = defaultTabsKey; }
    return ({
        type: tabRemoved,
        payload: { key: key, id: id }
    });
};
export var tabDisabledAction = function (id, key) {
    if (key === void 0) { key = defaultTabsKey; }
    return ({
        type: tabDisabled,
        payload: { key: key, id: id }
    });
};
export var selectTabList = function (key) {
    if (key === void 0) { key = defaultTabsKey; }
    return function (state) {
        if (!state.tabs[key]) {
            return [];
        }
        return state.tabs[key].list;
    };
};
export var tabListSelector = selectTabList;
export var selectCurrentTab = function (key) {
    if (key === void 0) { key = defaultTabsKey; }
    return function (state) {
        if (!state.tabs[key]) {
            return '';
        }
        var _a = state.tabs[key], _b = _a.list, list = _b === void 0 ? [] : _b, _c = _a.selected, selected = _c === void 0 ? '' : _c;
        var id = list.filter(function (tab) { return tab.id === selected; }).map(function (tab) { return tab.id; })[0];
        return id || '';
    };
};
export var selectedTabSelector = selectCurrentTab;
export var selectTabById = function (id, key) {
    if (key === void 0) { key = defaultTabsKey; }
    return function (state) {
        if (!state.tabs[key]) {
            return { id: '', title: '' };
        }
        var tab = state.tabs[key].list.filter(function (tab) { return tab.id === id; })[0];
        return tab;
    };
};
export var tabSelector = selectTabById;
var nextTabId = function (tabSet, id) {
    if (tabSet.selected === id) {
        var found_1 = false;
        var newIndex_1 = -1;
        tabSet.list.forEach(function (tab, index) {
            if (found_1 && newIndex_1 === -1) {
                newIndex_1 = index;
            }
            if (tab.id === id) {
                found_1 = true;
            }
        });
        if (newIndex_1 === -1) {
            newIndex_1 = Math.max(tabSet.list.length - 1, 0);
        }
        return tabSet.list[newIndex_1].id;
    }
    return id;
};
var tabsReducer = function (state, action) {
    var _a, _b, _c, _d, _e;
    if (state === void 0) { state = initialState; }
    var type = action.type, payload = action.payload;
    switch (type) {
        case tabListCreated:
            if (!state[payload.key]) {
                var _f = payload.list, list = _f === void 0 ? [] : _f, _g = payload.id, id = _g === void 0 ? '' : _g;
                return __assign(__assign({}, state), (_a = {}, _a[payload.key] = {
                    list: __spreadArray([], list, true),
                    selected: id || (list.length === 0 ? '' : list[0].id),
                }, _a));
            }
            return state;
        case tabAdded:
            if (state[payload.key] && (payload === null || payload === void 0 ? void 0 : payload.tab)) {
                return __assign(__assign({}, state), (_b = {}, _b[payload.key] = {
                    list: __spreadArray(__spreadArray([], state[payload.key].list, true), [payload.tab], false),
                    selected: state[payload.key].selected,
                }, _b));
            }
            return state;
        case tabRemoved:
            if (state[payload.key] && (payload === null || payload === void 0 ? void 0 : payload.id)) {
                var list = state[payload.key].list.filter(function (tab) { return tab.id !== payload.id; });
                var selected = nextTabId(state[payload.key], payload.id);
                return __assign(__assign({}, state), (_c = {}, _c[payload.key] = {
                    list: __spreadArray([], list, true),
                    selected: selected,
                }, _c));
            }
            return state;
        case tabDisabled:
            if (state[payload.key] && (payload === null || payload === void 0 ? void 0 : payload.id)) {
                var selected = nextTabId(state[payload.key], payload.id);
                return __assign(__assign({}, state), (_d = {}, _d[payload.key] = {
                    list: state[payload.key].list.map(function (tab) { return (__assign(__assign({}, tab), { disabled: tab.id === payload.id })); }),
                    selected: selected,
                }, _d));
            }
            return state;
        case tabSelected:
            if (state[payload.key] && (payload === null || payload === void 0 ? void 0 : payload.id)) {
                return __assign(__assign({}, state), (_e = {}, _e[payload.key] = {
                    list: state[payload.key].list,
                    selected: payload.id
                }, _e));
            }
            return state;
        default:
            return state;
    }
};
export default tabsReducer;
//# sourceMappingURL=index.js.map