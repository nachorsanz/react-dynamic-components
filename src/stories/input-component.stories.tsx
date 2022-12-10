import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Input from '../ui/input-component/input'

export default {
    title: 'Dynamic React Components/Components/Input',
    component: Input,
    argTypes: {
        placeholder: {
            control: {
                type: 'text',
            },
        },
    },
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => (
    <Input data-testid="input" {...args} />
)
export const InputStory = Template.bind({})

InputStory.args = {
    placeholder: 'Placeholder',
    styles: {},
    className: '',
    onChange: () => {},
    disabled: false,
    value: '',
    type: 'text',
    name: '',
    id: '',
    withShadow: false,
    hover: false,
}
