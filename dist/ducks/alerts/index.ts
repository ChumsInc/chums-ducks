import {RootStateOrAny} from "react-redux";
import {ActionInterface} from "../types";
import {BootstrapColor} from "../../types";

export const alertAdded: string = 'app/alerts/alertAdded';
export const alertDismissed: string = 'app/alerts/alertDismissed';

export interface BasicAlert {
    title?: string,
    message?: string,
    context?: string,
    color?: BootstrapColor,
    className?: string | object,
}

export interface Alert extends BasicAlert {
    id: number,
    count: number,
    timestamp: number,
}

export interface AlertListState {
    counter: number,
    list: Alert[],
}

export interface AlertAction extends ActionInterface {
    payload: {
        id?: number,
        alert?: BasicAlert,
    }
}

export const addAlertAction = (alert: BasicAlert): AlertAction =>
    ({
        type: alertAdded,
        payload: {
            alert: {
                ...alert,
                color: alert.color || 'danger'
            }
        }
    });

export const dismissAlertAction = (id: number): AlertAction => ({type: alertDismissed, payload: {id}})

export const onErrorAction = (err: Error, context?: string): AlertAction =>
    addAlertAction({message: err.message, title: err.name, context, color: 'danger'})


export const selectAlertList = (state: RootStateOrAny): Alert[] => state.alerts.list;
export const alertContextFilter = (list:Alert[], context:string):Alert[] => {
    return list.filter(al => al.context === context);
}




const initialState: AlertListState = {counter: 0, list: []}

const alertIDSort = (a:Alert, b:Alert) => a.id - b.id;

const alertReducer = (state: AlertListState = initialState, action: AlertAction): AlertListState => {
    const {type, payload} = action;
    const {counter, list} = state;
    switch (type) {
    case alertAdded: {
        const {alert} = payload;
        if (!alert) {
            return state;
        }
        const context = alert.context;
        const [contextAlert] = context ? alertContextFilter(list, context) : [];
        if (contextAlert) {
            return {
                counter,
                list: [
                    ...list.filter(al => al.id !== contextAlert.id),
                    ...list.filter(al => al.id === contextAlert.id)
                        .map(al => ({...al, count: al.count + 1, timestamp: new Date().valueOf()})),
                ].sort(alertIDSort),
            }
        }
        return {
            counter: counter + 1,
            list: [...list, {...alert, id: counter, count: 1, timestamp: new Date().valueOf()}].sort(alertIDSort)
        };
    }
    case alertDismissed:
        if (payload.id === undefined) {
            return state;
        }
        return {
            counter,
            list: [...list.filter(alert => alert.id !== payload.id)].sort(alertIDSort)
        }
    default:
        return state;
    }
}
export default alertReducer;

