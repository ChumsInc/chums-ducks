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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
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
export var tabListSelector = function (key) {
    if (key === void 0) { key = defaultTabsKey; }
    return function (state) { var _a; return ((_a = state.tabs[key]) === null || _a === void 0 ? void 0 : _a.list) || []; };
};
export var selectedTabSelector = function (key) {
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
export var tabSelector = function (id, key) {
    if (key === void 0) { key = defaultTabsKey; }
    return function (state) {
        if (!state.tabs[key]) {
            return { id: '', title: '' };
        }
        var tab = state.tabs[key].list.filter(function (tab) { return tab.id === id; })[0];
        return tab;
    };
};
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
    var _f = payload || {}, _g = _f.key, key = _g === void 0 ? defaultTabsKey : _g, tab = _f.tab, _h = _f.list, list = _h === void 0 ? [] : _h, _j = _f.id, id = _j === void 0 ? '' : _j;
    var tabSet = state[key];
    switch (type) {
        case tabListCreated:
            return __assign(__assign({}, state), (_a = {}, _a[key] = {
                list: __spreadArray([], list),
                selected: id || (list.length === 0 ? '' : list[0].id),
            }, _a));
        case tabAdded:
            if (tabSet && tab) {
                return __assign(__assign({}, state), (_b = {}, _b[key] = {
                    list: __spreadArray(__spreadArray([], tabSet.list), [tab]),
                    selected: tabSet.selected,
                }, _b));
            }
            return state;
        case tabRemoved:
            if (tabSet) {
                var list_1 = tabSet.list.filter(function (tab) { return tab.id !== id; });
                var selected = nextTabId(tabSet, id);
                return __assign(__assign({}, state), (_c = {}, _c[key] = {
                    list: __spreadArray([], list_1),
                    selected: selected,
                }, _c));
            }
            return state;
        case tabDisabled:
            if (tabSet) {
                var selected = nextTabId(tabSet, id);
                return __assign(__assign({}, state), (_d = {}, _d[key] = {
                    list: list.map(function (tab) { return (__assign(__assign({}, tab), { disabled: tab.id === id })); }),
                    selected: selected,
                }, _d));
            }
            return state;
        case tabSelected:
            if (tabSet) {
                return __assign(__assign({}, state), (_e = {}, _e[key] = __assign(__assign({}, tabSet), { selected: id }), _e));
            }
            return state;
        default:
            return state;
    }
};
export default tabsReducer;
//# sourceMappingURL=index.js.map