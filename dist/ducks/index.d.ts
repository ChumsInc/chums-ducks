declare const rootReducer: import("redux").Reducer<import("redux").CombinedState<{
    alerts: import("./alerts").AlertListState;
}>, import("./alerts").AlertAction>;
export declare type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
