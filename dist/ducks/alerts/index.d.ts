import { RootStateOrAny } from "react-redux";
import { ActionInterface } from "../types";
import { BasicAlert } from "../../types";
export declare const alertAdded: string;
export declare const alertDismissed: string;
export interface Alert extends BasicAlert {
    id: number;
    count: number;
    timestamp: number;
}
export interface AlertListState {
    counter: number;
    list: Alert[];
}
export interface AlertAction extends ActionInterface {
    payload: {
        id?: number;
        alert?: BasicAlert;
    };
}
export declare const addAlertAction: (alert: BasicAlert) => AlertAction;
export declare const dismissAlertAction: (id: number) => AlertAction;
export declare const onErrorAction: (err: Error, context?: string | undefined) => AlertAction;
export declare const selectAlertList: (state: RootStateOrAny) => Alert[];
export declare const alertContextFilter: (list: Alert[], context: string) => Alert[];
declare const alertReducer: (state: AlertListState | undefined, action: AlertAction) => AlertListState;
export default alertReducer;
