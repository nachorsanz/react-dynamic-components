import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Switcher from '../ui/switcher-component/switcher'

export default {
    title: 'Dynamic React Components/Components/Switcher',
    component: Switcher,

    argTypes: {
        size: {
            control: {
                type: 'radio',
                options: ['small', 'medium', 'large'],
            },
        },
        variant: {
            control: {
                type: 'radio',
                options: [
                    'primary',
                    'secondary',
                    'tertiary',
                    'danger',
                    'success',
                    'warning',
                    'info',
                    'light',
                    'dark',
                    'none',
                ],
            },
        },
        shape: {
            control: {
                type: 'radio',
                options: ['rounded', 'square', 'sharp'],
            },
        },
    },
} as ComponentMeta<typeof Switcher>

const Template: ComponentStory<typeof Switcher> = (args) => (
    <Switcher data-testid="switcher" {...args} />
)
export const SwitcherStory = Template.bind({})

SwitcherStory.args = {
    text: '',
    size: 'medium',
    variant: 'primary',
    disabled: false,
    withShadow: false,
    thumbColor: '',
    bgColor: '',
    styles: undefined,
    className: 'ReactDynamicComponents',
    shape: 'rounded',
}
