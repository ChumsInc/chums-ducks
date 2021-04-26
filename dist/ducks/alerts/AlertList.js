import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { dismissAlertAction, selectAlertList } from "./index";
import Alert from "../../components/Alert";
const AlertList = ({ context }) => {
    const dispatch = useDispatch();
    const list = useSelector(selectAlertList).filter(alert => !context || alert.context === context).sort((a, b) => b.timestamp - a.timestamp);
    const dismissHandler = (id) => dispatch(dismissAlertAction(id));
    return (React.createElement("div", null, list.map(alert => (React.createElement(Alert, { key: alert.id, color: alert.color, message: alert.message, className: alert.className, context: !!context ? undefined : alert.context, count: alert.count, title: alert.title, onDismiss: () => dismissHandler(alert.id) })))));
};
export default AlertList;
//# sourceMappingURL=AlertList.js.map