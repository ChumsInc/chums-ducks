/**
 * Created by steve on 8/24/2016.
 */
import 'isomorphic-fetch';
export declare const fetchOptions: {
    PostJSON: (object?: Object | undefined, options?: RequestInit | undefined) => RequestInit;
    Delete: (options?: RequestInit | undefined) => RequestInit;
};
export declare function fetchJSON<T>(url: string, options?: RequestInit): Promise<T | undefined>;
export declare function fetchHTML(url: string, options?: RequestInit): Promise<string | undefined>;
export declare function fetchPOST<T>(url: string, body: Object, options?: RequestInit): Promise<T | undefined>;
export declare function fetchDELETE<T>(url: string, options?: RequestInit): Promise<T | undefined>;
export declare const buildPath: (path: string, props?: object) => string;
