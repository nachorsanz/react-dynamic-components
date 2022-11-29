import React from 'react';
import ReactDynamicButtons from '../index';
export default {
    title: 'npm/component/React Dynamic Buttons',
    component: ReactDynamicButtons,
};
const Template = (args) => React.createElement(ReactDynamicButtons, Object.assign({}, args));
export const ReactDynamicButtonsStory = Template.bind({});
ReactDynamicButtonsStory.args = {
    text: 'Button',
    size: 'small',
    onClick: () => { },
    disabled: false,
    type: 'button',
    textColor: '#000',
    bgColor: "",
    styles: undefined
};
//# sourceMappingURL=button-component.stories.js.map