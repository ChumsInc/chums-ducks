import { combineReducers } from "redux";
export const sites = [
    { name: 'b2b', domain: 'b2b.chums.com' },
    { name: 'safety', domain: 'chumssafety.com' }
];
export const defaultSite = sites[0];
export const siteSelected = 'site/selected';
export const siteSelectedAction = (site = defaultSite) => ({ type: siteSelected, payload: { site } });
export const currentSiteSelector = (state) => state.sites.selected;
const selected = (state = Object.assign({}, defaultSite), action) => {
    const { type, payload } = action;
    switch (type) {
        case siteSelected:
            return payload.site || defaultSite;
        default:
            return state;
    }
};
export default combineReducers({
    selected,
});
//# sourceMappingURL=index.js.map