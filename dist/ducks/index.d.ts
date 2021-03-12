declare const rootReducer: import("redux").Reducer<import("redux").CombinedState<{
    alerts: {
        counter: number;
        list: any[];
    };
}>, import("redux").AnyAction>;
export declare type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
