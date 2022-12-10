import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Icon from '../ui/icon-component/icon'
import { getAllColorIcons, getAllFAIcons } from '../domain/icons'

export default {
    title: 'Dynamic React Components/Components/Icon',

    component: Icon,
    argTypes: {
        faIcon: {
            control: {
                type: 'select',
                options: getAllFAIcons(),
            },
        },
        fcIcon: {
            control: {
                type: 'select',
                options: getAllColorIcons(),
            },
        },
        color: {
            control: {
                type: 'color',
            },
        },
        size: {
            control: {
                type: 'text',
            },
        },
    },
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = (args) => (
    <Icon data-testid="icon" {...args} />
)
export const IconStory = Template.bind({})
IconStory.args = {
    faIcon: 'FaHome',
    fcIcon: undefined,
    color: '#000000',
    size: '1rem',
    styles: {},
    className: '',
}
