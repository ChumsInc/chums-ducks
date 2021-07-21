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
import { combineReducers } from "redux";
export var sites = [
    { name: 'b2b', domain: 'b2b.chums.com' },
    { name: 'safety', domain: 'chumssafety.com' }
];
export var defaultSite = sites[0];
export var siteSelected = 'site/selected';
export var siteSelectedAction = function (site) {
    if (site === void 0) { site = defaultSite; }
    return ({ type: siteSelected, payload: { site: site } });
};
export var currentSiteSelector = function (state) { return state.sites.selected; };
var selected = function (state, action) {
    if (state === void 0) { state = __assign({}, defaultSite); }
    var type = action.type, payload = action.payload;
    switch (type) {
        case siteSelected:
            return payload.site || defaultSite;
        default:
            return state;
    }
};
export default combineReducers({
    selected: selected,
});
//# sourceMappingURL=index.js.map