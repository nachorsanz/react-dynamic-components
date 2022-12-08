import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Input from "../ui/input/input";

export default {
    title: "React Dynamic Components/Components/Input",
    component: Input,
    argTypes: {
        placeholder: {
            control: {
                type: "text",
            },
        },
    },
}  as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;
export const InputStory = Template.bind({});

InputStory.args = {
    placeholder: "Placeholder",
};