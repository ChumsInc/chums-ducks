import {useEffect, useState} from "react";

export interface UseFetchResponse<T> {
    response: T|null,
    error: Error|null,
    isLoading: boolean,
}
export function useFetch<T = any>(request: RequestInfo, init?: RequestInit):UseFetchResponse<T> {
    const [response, setResponse] = useState<null | T>(null);
    const [error, setError] = useState<Error | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    if (!init) {
        init = {};
    }
    if (!init.credentials) {
        init.credentials = 'same-origin';
    }
    useEffect(() => {
        const abortController = new AbortController();
        setIsLoading(true);
        (async () => {
            try {
                const response = await fetch(request, {
                    ...init,
                    signal: abortController.signal,
                });
                setResponse(await response?.json() || null);
                setIsLoading(false);
            } catch (error:unknown) {
                if (error instanceof Error) {
                    if (error.name === "AbortError") {
                        return;
                    }
                    setError(error);
                }
                setIsLoading(false);
            }
        })();
        return () => {
            abortController.abort();
        };
    }, [init, request]);

    return { response, error, isLoading };
}
