export interface ActionPayload {
    error?: Error;
    context?: string;
}
export interface ActionInterface {
    type: string;
    payload?: ActionPayload | unknown;
    meta?: Object | string;
    error?: boolean;
}
