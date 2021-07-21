import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { dismissAlertAction, selectAlertList } from "./index";
import Alert from "./Alert";
var AlertList = function (_a) {
    var context = _a.context;
    var dispatch = useDispatch();
    var list = useSelector(selectAlertList).filter(function (alert) { return !context || alert.context === context; }).sort(function (a, b) { return b.timestamp - a.timestamp; });
    var dismissHandler = function (id) { return dispatch(dismissAlertAction(id)); };
    return (React.createElement("div", null, list.map(function (alert) { return (React.createElement(Alert, { key: alert.id, color: alert.color, message: alert.message, className: alert.className, context: !!context ? undefined : alert.context, count: alert.count, title: alert.title, onDismiss: function () { return dismissHandler(alert.id); } })); })));
};
export default AlertList;
//# sourceMappingURL=AlertList.js.map