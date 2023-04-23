"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckboxStory = void 0;
const react_1 = __importDefault(require("react"));
const checkbox_1 = __importDefault(require("../application/features/checkbox-component/checkbox"));
exports.default = {
    title: 'Dynamic React Components/Components/Checkbox',
    component: checkbox_1.default,
    argTypes: {
        labelPosition: {
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
                    'none',
                ],
            },
        },
    },
};
const Template = (args) => (react_1.default.createElement(checkbox_1.default, Object.assign({ "data-testid": "checkbox" }, args)));
exports.CheckboxStory = Template.bind({});
exports.CheckboxStory.args = {
    checked: false,
    label: '',
    size: 'medium',
    variant: 'primary',
    disabled: false,
    styles: undefined,
    className: 'ReactDynamicComponents',
    withShadow: false
};
//# sourceMappingURL=checkbox-component.stories.js.map