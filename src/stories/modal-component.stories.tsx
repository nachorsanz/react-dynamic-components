import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Modal from '../application/features/modal-component/modal'

export default {
    title: 'Dynamic React Components/Components/Modal',
    component: Modal,
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => (
    <Modal data-testid="modal" {...args} />
)
const style = {
    width: '500px',
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '20px',
    fontWeight: 'bold',
}
const buttonStyle = {
    width: '100px',
    height: '30px',
    fontWeight: 'bold',
    backgroundColor: '#00aeff',
    color: '#fff',
    border: '1px solid #fff',
    cursor: 'pointer',

}

const footerStyle = {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: '15px'
  

}

export const ModalStory = Template.bind({})

ModalStory.args = {
    isOpen: true,
    onClose: () => {},
    children: (
        <div style={style}>
            <h1>Modal</h1>
        </div>
    ),
    title: 'Modal',
    footer: (
        <div style={footerStyle}>
            <button style={buttonStyle}>Cerrar</button>
            <button style={buttonStyle}>Aceptar</button>
        </div>
    ),
    withHeader: true,
    withFooter: true,
}
