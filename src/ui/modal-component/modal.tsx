import React, { useState } from 'react'
import StyledOverlay from './StyledOverlay'
import ModalWrapper from './modal-wrapper'

type ModalProps = {
    isOpen: boolean
    onClose: () => void
    children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
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
                        {children}
                    </ModalWrapper>
                </StyledOverlay>
            )}
        </>
    )
}

export default Modal
