import React from "react";
import ProgressBar from "./ProgressBar";
import Modal from "./Modal";
import Progress from "./Progress";
import {BootstrapColor} from "../types";

export interface LoadingModalProps {
    title?: string,
    percent?: number,
    color: BootstrapColor,
}

const LoadingModal: React.FC<LoadingModalProps> = ({
                                                       title = 'Loading',
                                                       percent = 100,
                                                       color = 'secondary'
                                                   }) => {
    return (
        <Modal title={title} canClose={false}>
            <Progress>
                <ProgressBar value={percent} animated color={color}/>
            </Progress>
        </Modal>
    )
}
export default LoadingModal;
