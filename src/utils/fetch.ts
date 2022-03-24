/**
 * Created by steve on 8/24/2016.
 */

import 'isomorphic-fetch';
import {compile} from 'path-to-regexp';

export const fetchOptions = {
    PostJSON: (object?:Object, options?:RequestInit):RequestInit => {
        options = options || {};
        const headers = options?.headers || {};
        if (options?.headers) {
            delete options.headers;
        }
        return {
            credentials: 'same-origin',
            method: 'post',
            ...options,
            body: JSON.stringify(object),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                ...headers,
            },
        };
    },
    Delete: (options?:RequestInit):RequestInit => {
        options = options || {};
        const headers = options.headers || {};
        delete options.headers;
        return {
            credentials: 'same-origin',
            method: 'DELETE',
            ...options,
            headers: {
                ...headers
            }
        };
    }
};

async function handleJSONResponse<T = any>(res:Response):Promise<T> {
    if (!res.ok) {
        const text = await res.text();
        return Promise.reject(new Error(text));
    }
    const json = await res.json();
    if (json.error) {
        console.warn(json.error);
        return Promise.reject(new Error(json.error));
    }
    return json || {};
}

export async function fetchJSON<T = void>(url:string, options:RequestInit = {}):Promise<T> {
    try {
        if (!!options?.method && ['POST', 'PUT'].includes(options.method.toUpperCase())) {
            const headers = options?.headers || {};
            if (options?.headers) {
                delete options.headers;
            }
            options.headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                ...headers,
            }
        }
        const res = await fetch(url, {credentials: 'same-origin', ...options});
        return await handleJSONResponse<T>(res);
    } catch(err:unknown) {
        if (err instanceof Error) {
            console.log("fetchJSON()", err.message);
            return Promise.reject(err);
        }
        console.error("fetchJSON()", err);
        if (typeof err === 'string') {
            return Promise.reject(new Error(err));
        }
        return Promise.reject(err);
    }
}

export async function fetchHTML(url:string, options: RequestInit = {}):Promise<string|undefined> {
    try {
        const res = await fetch(url, {credentials: 'same-origin', ...options});
        if (!res.ok) {
            const text = await res.text();
            return Promise.reject(new Error(text));
        }
        return await res.text();
    } catch(err:unknown) {
        if (err instanceof Error) {
            console.log("fetchHTML()", err.message);
            return Promise.reject(err);
        }
        console.error("fetchHTML()", err)
        if (typeof err === 'string') {
            return Promise.reject(new Error(err));
        }
        return Promise.reject(err);
    }
}

export async function fetchPOST<T = void>(url:string, body:Object, options: RequestInit = {}):Promise<T> {
    try {
        const _options = fetchOptions.PostJSON(body, options);
        return await fetchJSON(url, _options);
    } catch(err:unknown) {
        if (err instanceof Error) {
            console.log("fetchPOST()", err.message);
            return Promise.reject(err);
        }
        console.error('fetchPOST()', err);
        if (typeof err === 'string') {
            return Promise.reject(new Error(err));
        }
        return Promise.reject(err);

    }
}

export async function fetchDELETE<T = void>(url:string, options: RequestInit = {}):Promise<T> {
    try {
        const _options = fetchOptions.PostJSON(options);
        return await fetchJSON<T>(url, _options);
    } catch(err:unknown) {
        if (err instanceof Error) {
            console.log("fetchDELETE()", err.message);
            return Promise.reject(err);
        }
        console.log('fetchDELETE', err);
        if (typeof err === 'string') {
            return Promise.reject(new Error(err));
        }
        return Promise.reject(err);
    }
}

export const buildPath = (path:string, props:object = {}):string => {
    try {
        return compile(path, {encode: encodeURIComponent})(props || {});
    } catch (err:unknown) {
        if (err instanceof Error) {
            console.trace(err.message, path, props);
            return path;
        }
        console.error(err);
        return '';
    }
};


