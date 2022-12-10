import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Modal from '../ui/modal-component/modal'

export default {
    title: 'Dynamic React Components/Components/Modal',
    component: Modal,
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal data-testid="modal" {...args} />

export const ModalStory = Template.bind({})

ModalStory.args = {
    children: 'Modal',
}