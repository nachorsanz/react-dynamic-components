"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactDynamicButtonsStory = void 0;
const react_1 = __importDefault(require("react"));
const index_1 = __importDefault(require("../index"));
const icons_1 = require("../icons");
exports.default = {
    title: 'React Dynamic Buttons/Components/Button',
    component: index_1.default,
    argTypes: {
        faIcon: {
            control: {
                type: 'select',
                options: (0, icons_1.getAllFAIcons)(),
            },
        },
        colorIcon: {
            control: {
                type: 'select',
                options: (0, icons_1.getAllColorIcons)(),
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
const Template = (args) => (react_1.default.createElement(index_1.default, Object.assign({ "data-testid": "button" }, args)));
exports.ReactDynamicButtonsStory = Template.bind({});
exports.ReactDynamicButtonsStory.args = {
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
    faIcon: null,
    colorIcon: null,
    iconPosition: 'none',
    className: 'ReactDynamicButtons',
    hover: false,
};
//# sourceMappingURL=button-component.stories.js.map