import React from 'react';
import SelectComponent from '../ui/select-component/select';
export default {
    title: 'Dynamic React Components/Components/Select',
    component: SelectComponent,
};
const Template = (args) => (React.createElement(SelectComponent, Object.assign({ "data-testid": "select" }, args)));
export const SelectComponentStory = Template.bind({});
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
};
//# sourceMappingURL=select-component.stories.js.map