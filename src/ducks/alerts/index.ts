import {RootStateOrAny} from "react-redux";
import {ActionInterface, ActionPayload} from "../types";
import {BasicAlert} from "../../types";

export interface AlertInterface extends BasicAlert {
    id: number,
    count: number,
    timestamp: number,
}

export const defaultAlert:BasicAlert = {
    canDismiss: true,
    color: "danger"
}

export interface AlertListState {
    counter: number,
    list: AlertInterface[],
}

export interface AlertPayload extends ActionPayload {
    id?: number,
    alert?: BasicAlert,
}

export interface AlertAction extends ActionInterface {
    payload?: AlertPayload,
}

interface RootState extends RootStateOrAny {
    alerts: AlertListState
}


export const alertAdded: string = 'alerts/alertAdded';
export const alertDismissed: string = 'alerts/alertDismissed';
export const alertDismissedByContext: string = 'alerts/alertDismissedByContext';


export const addAlertAction = (alert: BasicAlert): AlertAction =>
    ({
        type: alertAdded,
        payload: {
            alert: {
                ...defaultAlert,
                ...alert,
            }
        },
        meta: alert.context,
    });

const buildAlert = (err: Error, context?: string):BasicAlert => ({message: err.message, title: err.name, context, color: 'danger'});

export const dismissAlertAction = (id: number): AlertAction => ({type: alertDismissed, payload: {id}})
export const dismissContextAlert = (context:string): AlertAction => ({type: alertDismissedByContext, payload: {context}})
export const dismissContextAlertAction = (context:string): AlertAction => ({type: alertDismissedByContext, payload: {context}})

export const onErrorAction = (err: Error, context?: string): AlertAction =>
    addAlertAction(buildAlert(err, context));


export const alertListSelector = (state: RootState): AlertInterface[] => state.alerts.list;
export const selectAlertList = alertListSelector;

export const alertListByContextSelector = (context: string) => (state:RootState):AlertInterface[] => state.alerts.list.filter(alert => alert.context === context)
export const selectAlertListByContext = alertListByContextSelector;

export const alertContextFilter = (list:AlertInterface[], context:string):AlertInterface[] => {
    return list.filter(al => al.context === context);
}


const initialState: AlertListState = {counter: 0, list: []}

const alertIDSort = (a:AlertInterface, b:AlertInterface) => a.id - b.id;

const addAlert = (state:AlertListState, action:AlertAction):AlertListState => {
    const {counter, list} = state;
    const {payload} = action;
    let {alert, error, context} = payload || {};
    if (error && !alert) {
        alert = buildAlert(error, context);
    }
    if (!alert) {
        return state;
    }
    if (alert.context) {
        context = alert.context;
    }

    const [contextAlert] = context ? alertContextFilter(list, context) : [];

    if (!contextAlert) {
        return {
            counter: counter + 1,
            list: [
                ...list,
                {...alert, id: counter, count: 1, timestamp: new Date().valueOf()}
            ].sort(alertIDSort)
        };
    }
    return {
        counter,
        list: [
            ...list.filter(alert => alert.id !== contextAlert.id),
            ...list.filter(alert => alert.id === contextAlert.id)
                .map(alert => {
                    return {
                        ...alert,
                        ...payload?.alert,
                        count: alert.count + 1,
                        timestamp: new Date().valueOf()
                    }
                }),
        ].sort(alertIDSort),
    }
}

const alertReducer = (state: AlertListState = initialState, action: AlertAction): AlertListState => {
    const {type, payload} = action;
    const {counter, list} = state;
    switch (type) {
    case alertAdded: {
        return addAlert(state, action);
    }
    case alertDismissed:
        if (payload?.id === undefined) {
            return state;
        }
        return {
            counter,
            list: [...list.filter(alert => alert.id !== payload?.id)].sort(alertIDSort)
        }
    case alertDismissedByContext:
        if (!payload?.context) {
            return state;
        }
        return {
            counter,
            list: [...list.filter(alert => alert.context !== payload?.context)].sort(alertIDSort)
        }
    default:
        if (payload?.error) {
            return addAlert(state, action);
        }
        return state;
    }
}

export default alertReducer;
