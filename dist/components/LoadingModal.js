import React from "react";
import ProgressBar from "./ProgressBar";
import Modal from "./Modal";
import Progress from "./Progress";
const LoadingModal = ({ title = 'Loading', percent = 100, color = 'secondary' }) => {
    return (React.createElement(Modal, { title: title, canClose: false },
        React.createElement(Progress, null,
            React.createElement(ProgressBar, { value: percent, animated: true, color: color }))));
};
export default LoadingModal;
//# sourceMappingURL=LoadingModal.js.map