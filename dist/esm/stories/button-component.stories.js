import React from 'react';
import Button from '../ui/button-component/button';
import { getAllColorIcons, getAllFAIcons } from '../domain/icons';
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
};
const Template = (args) => (React.createElement(Button, Object.assign({ "data-testid": "button" }, args)));
export const ButtonStory = Template.bind({});
ButtonStory.args = {
    text: 'Button',
    size: 'large',
    onClick: () => { },
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
};
//# sourceMappingURL=button-component.stories.js.map