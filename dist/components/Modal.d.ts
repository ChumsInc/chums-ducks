import React from "react";
import { BootstrapSize } from "../types";
export interface ModalProps {
    title?: string;
    size?: BootstrapSize;
    footer?: React.ReactNode;
    canClose?: boolean;
    scrollable?: boolean;
    centered?: boolean;
    staticBackdrop?: boolean;
    dialogClassName?: string | object;
    onClose?: () => void;
}
declare const Modal: React.FC<ModalProps>;
export default Modal;
