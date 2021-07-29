declare const rootReducer: import("redux").Reducer<import("redux").CombinedState<{
    alerts: import("./alerts").AlertListState;
    pages: import("./page").PageState;
    sortableTables: import("./sortableTables").SortableTablesState;
    tabs: import("./tabs").TabsState;
}>, import("./alerts").AlertAction | import("./page").PageAction | import("./sortableTables").SortableTablesAction | import("./tabs").TabAction>;
export declare type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
