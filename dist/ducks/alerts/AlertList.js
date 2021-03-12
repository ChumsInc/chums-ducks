import * as React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { alertSelector, dismissAlertAction } from "./index";
import Alert from './Alert';
var AlertList = function (_a) {
    var context = _a.context;
    var list = useSelector(alertSelector).filter(function (alert) { return !context || alert.context === context; });
    var dispatch = useDispatch();
    return (React.createElement("div", null, list.map(function (alert) { return React.createElement(Alert, { key: alert.id, alert: alert, onDismiss: function (id) { return dispatch(dismissAlertAction(id)); } }); })));
};
export default AlertList;
//# sourceMappingURL=AlertList.js.map