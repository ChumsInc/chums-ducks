/**
 * Created by steve on 8/24/2016.
 */
import 'isomorphic-fetch';
export declare const fetchOptions: {
    PostJSON: (object?: Object | undefined, options?: RequestInit | undefined) => RequestInit;
    Delete: (options?: RequestInit | undefined) => RequestInit;
};
export declare function fetchJSON<T = any>(url: string, options?: RequestInit): Promise<T>;
export declare function fetchHTML(url: string, options?: RequestInit): Promise<string | undefined>;
export declare function fetchPOST<T = any>(url: string, body: Object, options?: RequestInit): Promise<T>;
export declare function fetchDELETE<T = any>(url: string, options?: RequestInit): Promise<T>;
export declare const buildPath: (path: string, props?: object) => string;
