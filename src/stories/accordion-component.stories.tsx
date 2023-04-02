import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Accordion from '../ui/accordion-component/accordion'

export default {
    title: 'Dynamic React Components/Components/Accordion',
    component: Accordion,

    argTypes: {
        wipComponent: {
            control: {
                type: 'boolean',
            },
        },
    },
} as ComponentMeta<typeof Accordion>

const Template: ComponentStory<typeof Accordion> = (args) => (
    <Accordion data-testid="accordion" {...args} />
)
export const AccordionStory = Template.bind({})

AccordionStory.args = {
    sections: [
        {
            title: 'Section 1',
            children: <p>Section 1 content</p>,
        },
        {
            title: 'Section 2',
            children: <p>Section 2 content</p>,
        },
        {
            title: 'Section 3',
            children: <p>Section 3 content</p>,
        },
    ],
    wipComponent: true,
}
