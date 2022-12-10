import React from 'react'
import Card from '../common/card-component/card-component'

 type ModalProps = {
    children: React.ReactNode
    styles?: React.CSSProperties

}

const Modal: React.FC<ModalProps> = ({children, styles}) => {
    return (
        <Card styles={styles}>
            Modal
            {children}
        </Card>
    )
}

export default Modal
