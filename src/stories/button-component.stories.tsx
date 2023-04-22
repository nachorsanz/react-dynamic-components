import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button from '../application/features/button-component/button'
import { getAllColorIcons, getAllFAIcons } from '../domain/services/icons'

export default {
    title: 'Dynamic React Components/Components/Button',
    component: Button,

    argTypes: {
        faIcon: {
            control: {
                type: 'select',
                options: getAllFAIcons(),
            },
        },
        colorIcon: {
            control: {
                type: 'select',
                options: getAllColorIcons(),
            },
        },
        iconPosition: {
            control: {
                type: 'radio',
                options: ['left', 'right', 'none'],
            },
        },
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
                    'link',
                    'none',
                ],
            },
        },
        option: {
            control: {
                type: 'radio',
                options: ['submit', 'reset', 'button'],
            },
        },
    },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => (
    <Button data-testid="button" {...args} />
)
export const ButtonStory = Template.bind({})

ButtonStory.args = {
    text: 'Button',
    size: 'large',
    onClick: () => {},
    disabled: false,
    option: 'submit',
    textColor: '',
    bgColor: '',
    styles: undefined,
    variant: 'danger',
    withShadow: false,
    faIcon: null,
    colorIcon: null,
    iconPosition: 'none',
    className: 'ReactDynamicComponents',
    hover: false,
}
