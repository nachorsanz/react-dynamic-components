import React from 'react';
import Input from '../application/features/input-component/input';
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
};
const Template = (args) => (React.createElement(Input, Object.assign({ "data-testid": "input" }, args)));
export const InputStory = Template.bind({});
InputStory.args = {
    placeholder: 'Placeholder',
    styles: {},
    className: '',
    onChange: () => { },
    disabled: false,
    value: '',
    type: 'text',
    name: '',
    id: '',
};
//# sourceMappingURL=input-component.stories.js.map