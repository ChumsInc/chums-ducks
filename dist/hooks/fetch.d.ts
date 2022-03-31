export interface UseFetchResponse<T> {
    response: T | null;
    error: Error | null;
    isLoading: boolean;
}
export declare function useFetch<T = any>(request: RequestInfo, init?: RequestInit): UseFetchResponse<T>;
