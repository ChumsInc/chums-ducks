import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { dismissAlertAction, selectAlertList } from "./index";
import Alert from './Alert';
const AlertList = ({ context }) => {
    const dispatch = useDispatch();
    const list = useSelector(selectAlertList).filter(alert => !context || alert.context === context);
    const dismissHandler = (id) => dispatch(dismissAlertAction(id));
    return (<div>
            {list.map(alert => (<Alert key={alert.id} color={alert.color} message={alert.message} className={alert.className} context={!!context ? undefined : alert.context} count={alert.count} title={alert.title} onDismiss={() => dismissHandler(alert.id)}/>))}
        </div>);
};
export default AlertList;
//# sourceMappingURL=AlertList.js.map