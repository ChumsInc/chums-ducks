import React from "react";
import { ModalProps } from "./Modal";
import { BootstrapColor } from "../types";
export interface LoadingModalProps extends ModalProps {
    title?: string;
    percent?: number;
    color?: BootstrapColor;
}
declare const LoadingModal: React.FC<LoadingModalProps>;
export default LoadingModal;
