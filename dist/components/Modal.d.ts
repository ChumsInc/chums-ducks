import React from "react";
export declare type BootstrapSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '';
interface ModalProps {
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
