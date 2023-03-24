import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import SelectComponent from '../ui/select-component/select'

export default {
    title: 'Dynamic React Components/Components/Select',
    component: SelectComponent,
} as ComponentMeta<typeof SelectComponent>

const Template: ComponentStory<typeof SelectComponent> = (args) => (
    <SelectComponent data-testid="select" {...args} />
)

export const SelectComponentStory = Template.bind({})

SelectComponentStory.args = {
    selectContent: [
        {
            key: 'Oviedo',
            value: 'Oviedo',
        },
        {
            key: 'Zaragoza',
            value: 'Zaragoza',
        },
        {
            key: 'Barcelona',
            value: 'Barcelona',
        },
        {
            key: 'Madrid',
            value: 'Madrid',
        },
    ],
    selectPlaceHolder: 'Select one option',
    textColor: '#000000',
    backgroundColor: '#ffffff',
    itemListHoverColor: ' #d6d6d6',
    shouldHaveValue: true,
}
