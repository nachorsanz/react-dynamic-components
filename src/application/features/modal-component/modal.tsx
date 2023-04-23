import React, { useState } from 'react'
import StyledOverlay from './StyledOverlay'
import ModalWrapper from './modal-wrapper'
import styled from 'styled-components'

type ModalProps = {
    isOpen: boolean
    onClose: () => void
    children: React.ReactNode
    title?: string
    footer?: React.ReactNode
    withHeader?: boolean
    withFooter?: boolean
    
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title, footer, withHeader = true, withFooter = false }) => {
    const [isVisible, setIsVisible] = useState(false)

    React.useEffect(() => {
        setIsVisible(isOpen)
    }, [isOpen])

    const handleClose = () => {
        setIsVisible(false)
        onClose()
    }

    return (
        <>
            {isVisible && (
                <StyledOverlay onClick={handleClose}>
                    <ModalWrapper
                        onClick={(e) => e.stopPropagation()}
                        data-testid="modal"
                    >
                        {withHeader && <ModalHeader>
                            {title && <ModalTitle>{title}</ModalTitle>}
                            <ModalCloseButton onClick={handleClose}>x</ModalCloseButton>
                        </ModalHeader>}
                        <ModalContent>{children}</ModalContent>
                        {footer && withFooter && <ModalFooter>{footer}</ModalFooter>}
                    </ModalWrapper>
                </StyledOverlay>
            )}
        </>
    )
}

const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e8e8e8;
    padding: 10px;
`

const ModalTitle = styled.h3`
    margin: 0;
    font-size: 1.5rem;
    
`

const ModalCloseButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
    padding: 0;
    color: #a3a3a3;
`

const ModalContent = styled.div`
    padding: 20px;
`

const ModalFooter = styled.div`
    border-top: 1px solid #e8e8e8;
    padding: 10px;
`

export default Modal
