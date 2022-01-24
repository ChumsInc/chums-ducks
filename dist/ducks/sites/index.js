"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.currentSiteSelector = exports.siteSelectedAction = exports.siteSelected = exports.defaultSite = exports.sites = void 0;
const redux_1 = require("redux");
exports.sites = [
    { name: 'b2b', domain: 'b2b.chums.com' },
    { name: 'safety', domain: 'chumssafety.com' }
];
exports.defaultSite = exports.sites[0];
exports.siteSelected = 'site/selected';
const siteSelectedAction = (site = exports.defaultSite) => ({ type: exports.siteSelected, payload: { site } });
exports.siteSelectedAction = siteSelectedAction;
const currentSiteSelector = (state) => state.sites.selected;
exports.currentSiteSelector = currentSiteSelector;
const selected = (state = { ...exports.defaultSite }, action) => {
    const { type, payload } = action;
    switch (type) {
        case exports.siteSelected:
            return payload.site || exports.defaultSite;
        default:
            return state;
    }
};
exports.default = (0, redux_1.combineReducers)({
    selected,
});
//# sourceMappingURL=index.js.map