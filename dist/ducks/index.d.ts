declare const rootReducer: import("redux").Reducer<import("redux").CombinedState<{
    alerts: import("./alerts").AlertListState;
    page: import("redux").CombinedState<{
        current: number;
        rowsPerPage: number;
    }>;
    tabs: import("redux").CombinedState<{
        list: import("..").Tab[];
        selected: string;
    }>;
}>, import("./alerts").AlertAction | import("./page").PageAction | import("./tabs").TabAction>;
export declare type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
