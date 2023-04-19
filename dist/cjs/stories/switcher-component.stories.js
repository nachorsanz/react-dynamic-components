"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwitcherStory = void 0;
const react_1 = __importDefault(require("react"));
const switcher_1 = __importDefault(require("../ui/switcher-component/switcher"));
exports.default = {
    title: 'Dynamic React Components/Components/Switcher',
    component: switcher_1.default,
    argTypes: {
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
        shape: {
            control: {
                type: 'radio',
                options: ['rounded', 'square', 'sharp'],
            },
        },
    },
};
const Template = (args) => (react_1.default.createElement(switcher_1.default, Object.assign({ "data-testid": "switcher" }, args)));
exports.SwitcherStory = Template.bind({});
exports.SwitcherStory.args = {
    text: '',
    size: 'medium',
    variant: 'primary',
    disabled: false,
    withShadow: false,
    thumbColor: '',
    bgColor: '',
    styles: undefined,
    className: 'ReactDynamicComponents',
    shape: 'rounded',
};
//# sourceMappingURL=switcher-component.stories.js.map