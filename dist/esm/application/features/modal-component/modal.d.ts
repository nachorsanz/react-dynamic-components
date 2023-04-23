import React from 'react';
type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title?: string;
    footer?: React.ReactNode;
    withHeader: boolean;
    withFooter: boolean;
};
declare const Modal: React.FC<ModalProps>;
export default Modal;
