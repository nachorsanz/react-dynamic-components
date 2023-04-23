import React, { useState } from 'react';
import StyledOverlay from './StyledOverlay';
import ModalWrapper from './modal-wrapper';
import styled from 'styled-components';
const Modal = ({ isOpen, onClose, children, title, footer, withHeader = true, withFooter = false }) => {
    const [isVisible, setIsVisible] = useState(false);
    React.useEffect(() => {
        setIsVisible(isOpen);
    }, [isOpen]);
    const handleClose = () => {
        setIsVisible(false);
        onClose();
    };
    return (React.createElement(React.Fragment, null, isVisible && (React.createElement(StyledOverlay, { onClick: handleClose },
        React.createElement(ModalWrapper, { onClick: (e) => e.stopPropagation(), "data-testid": "modal" },
            withHeader && React.createElement(ModalHeader, null,
                title && React.createElement(ModalTitle, null, title),
                React.createElement(ModalCloseButton, { onClick: handleClose }, "x")),
            React.createElement(ModalContent, null, children),
            footer && withFooter && React.createElement(ModalFooter, null, footer))))));
};
const ModalHeader = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e8e8e8;
    padding: 10px;
`;
const ModalTitle = styled.h3 `
    margin: 0;
    font-size: 1.5rem;
    
`;
const ModalCloseButton = styled.button `
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
    padding: 0;
    color: #a3a3a3;
`;
const ModalContent = styled.div `
    padding: 20px;
`;
const ModalFooter = styled.div `
    border-top: 1px solid #e8e8e8;
    padding: 10px;
`;
export default Modal;
//# sourceMappingURL=modal.js.map