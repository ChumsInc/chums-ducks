declare const rootReducer: import("redux").Reducer<import("redux").CombinedState<{
    alerts: import("./alerts").AlertListState;
    page: import("redux").CombinedState<{
        current: number;
        rowsPerPage: number;
    }>;
}>, import("./alerts").AlertAction | import("./page").PageAction>;
export declare type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
