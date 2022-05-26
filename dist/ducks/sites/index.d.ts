import { Action } from "redux";
export interface Site {
    name: string;
    domain: string;
}
export declare const sites: Site[];
export declare const defaultSite: Site;
export interface SiteAction extends Action {
    payload: {
        site?: Site;
    };
}
export interface SiteState {
    selected: Site;
}
interface RootStateWithSites {
    sites: SiteState;
}
export declare const siteSelected = "site/selected";
export declare const siteSelectedAction: (site?: Site) => SiteAction;
export declare const currentSiteSelector: (state: RootStateWithSites) => Site;
declare const _default: import("redux").Reducer<import("redux").CombinedState<{
    selected: Site;
}>, SiteAction>;
export default _default;
