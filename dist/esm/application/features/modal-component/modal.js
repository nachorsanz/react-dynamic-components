import React, { useState } from 'react';
import StyledOverlay from './StyledOverlay';
import ModalWrapper from './modal-wrapper';
const Modal = ({ isOpen, onClose, children }) => {
    const [isVisible, setIsVisible] = useState(false);
    React.useEffect(() => {
        setIsVisible(isOpen);
    }, [isOpen]);
    const handleClose = () => {
        setIsVisible(false);
        onClose();
    };
    return (React.createElement(React.Fragment, null, isVisible && (React.createElement(StyledOverlay, { onClick: handleClose },
        React.createElement(ModalWrapper, { onClick: (e) => e.stopPropagation(), "data-testid": "modal" }, children)))));
};
export default Modal;
//# sourceMappingURL=modal.js.map