"use strict";
/**
 * Created by steve on 8/24/2016.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildPath = exports.fetchDELETE = exports.fetchPOST = exports.fetchHTML = exports.fetchJSON = exports.fetchOptions = exports.Response = exports.Request = exports.Headers = void 0;
require("whatwg-fetch");
const path_to_regexp_1 = require("path-to-regexp");
exports.default = self.fetch.bind(self);
exports.Headers = self.Headers;
exports.Request = self.Request;
exports.Response = self.Response;
exports.fetchOptions = {
    PostJSON: (object, options) => {
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
    Delete: (options) => {
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
async function handleJSONResponse(res) {
    if (!res.ok) {
        const text = await res.text();
        return Promise.reject(new Error(text));
    }
    const json = await res.json();
    if (json.error) {
        console.warn(json.error);
        return Promise.reject(new Error(json.error));
    }
    return json;
}
async function fetchJSON(url, options = {}) {
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
            };
        }
        const res = await fetch(url, { credentials: 'same-origin', ...options });
        return await handleJSONResponse(res);
    }
    catch (err) {
        if (err instanceof Error) {
            console.log("fetchJSON()", err.message);
            return Promise.reject(err);
        }
        console.error("fetchJSON()", err);
    }
}
exports.fetchJSON = fetchJSON;
async function fetchHTML(url, options = {}) {
    try {
        const res = await fetch(url, { credentials: 'same-origin', ...options });
        if (!res.ok) {
            const text = await res.text();
            return Promise.reject(new Error(text));
        }
        return await res.text();
    }
    catch (err) {
        if (err instanceof Error) {
            console.log("fetchHTML()", err.message);
            return Promise.reject(err);
        }
        console.error("fetchHTML()", err);
    }
}
exports.fetchHTML = fetchHTML;
async function fetchPOST(url, body, options = {}) {
    try {
        const res = await fetch(url, exports.fetchOptions.PostJSON(body, options));
        return await handleJSONResponse(res);
    }
    catch (err) {
        if (err instanceof Error) {
            console.log("fetchPOST()", err.message);
            return Promise.reject(err);
        }
        console.error('fetchPOST()', err);
    }
}
exports.fetchPOST = fetchPOST;
async function fetchDELETE(url, options = {}) {
    try {
        const res = await fetch(url, exports.fetchOptions.Delete(options));
        return await handleJSONResponse(res);
    }
    catch (err) {
        if (err instanceof Error) {
            console.log("fetchDELETE()", err.message);
            return Promise.reject(err);
        }
        console.log('fetchDELETE', err);
    }
}
exports.fetchDELETE = fetchDELETE;
const buildPath = (path, props = {}) => {
    try {
        return (0, path_to_regexp_1.compile)(path, { encode: encodeURIComponent })(props || {});
    }
    catch (err) {
        if (err instanceof Error) {
            console.trace(err.message, path, props);
            return path;
        }
        console.error(err);
        return '';
    }
};
exports.buildPath = buildPath;
//# sourceMappingURL=fetch.js.map