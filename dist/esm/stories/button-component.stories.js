import React from 'react';
import ReactDynamicButtons from '../index';
import { getAllIcons } from '../icons';
export default {
    title: 'React Dynamic Buttons/Components/Button',
    component: ReactDynamicButtons,
    argTypes: {
        icon: {
            control: {
                type: 'select',
                options: getAllIcons(),
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
};
const Template = (args) => (React.createElement(ReactDynamicButtons, Object.assign({}, args)));
export const ReactDynamicButtonsStory = Template.bind({});
ReactDynamicButtonsStory.args = {
    text: 'React Dynamic Buttons',
    size: 'large',
    onClick: () => { },
    disabled: false,
    option: 'submit',
    textColor: '',
    bgColor: '',
    styles: undefined,
    variant: 'danger',
    withShadow: false,
    icon: 'FaReact',
    iconPosition: 'right',
    className: 'ReactDynamicButtons',
    hover: false,
};
//# sourceMappingURL=button-component.stories.js.map