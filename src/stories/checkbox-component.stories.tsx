import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Checkbox from '../application/features/checkbox-component/checkbox'

export default {
    title: 'Dynamic React Components/Components/Checkbox',
    component: Checkbox,

    argTypes: {
        labelPosition: {
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
                    'none',
                ],
            },
        },
       
    },
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = (args) => (
    <Checkbox data-testid="checkbox" {...args} />
)
export const CheckboxStory = Template.bind({})

CheckboxStory.args = {
    checked: false,
    label: '',
    size: 'medium',
    variant: 'primary',
    disabled: false,
    styles: undefined,
    className: 'ReactDynamicComponents',
    withShadow: false
 
}
