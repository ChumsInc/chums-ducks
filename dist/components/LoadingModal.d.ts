import React from "react";
import { BootstrapColor } from "../types";
interface LoadingModalProps {
    title?: string;
    percent?: number;
    color: BootstrapColor;
}
declare const LoadingModal: React.FC<LoadingModalProps>;
export default LoadingModal;
