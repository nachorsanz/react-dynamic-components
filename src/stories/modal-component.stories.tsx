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
    width: '300px',
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '20px',
    fontWeight: 'bold',
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
}
