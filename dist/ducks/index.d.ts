declare const rootReducer: import("redux").Reducer<import("redux").CombinedState<{
    alerts: import("./alerts").AlertListState;
    page: import("./page").PageState;
    sites: import("redux").CombinedState<{
        selected: import("./sites").Site;
    }>;
    sortableTables: import("./sortableTables").SortableTablesState;
    tabs: import("./tabs").TabsState;
}>, import("./page").PageAction | import("./alerts").AlertAction | import("./sites").SiteAction | import("./sortableTables").SortableTablesAction | import("./tabs").TabAction>;
export declare type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
