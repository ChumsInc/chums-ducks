"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFetch = void 0;
const react_1 = require("react");
function useFetch(request, init) {
    const [response, setResponse] = (0, react_1.useState)(null);
    const [error, setError] = (0, react_1.useState)(null);
    const [isLoading, setIsLoading] = (0, react_1.useState)(true);
    if (!init) {
        init = {};
    }
    if (!init.credentials) {
        init.credentials = 'same-origin';
    }
    (0, react_1.useEffect)(() => {
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
            }
            catch (error) {
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
exports.useFetch = useFetch;
//# sourceMappingURL=fetch.js.map