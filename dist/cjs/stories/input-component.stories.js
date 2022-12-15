"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputStory = void 0;
const react_1 = __importDefault(require("react"));
const input_1 = __importDefault(require("../ui/input-component/input"));
exports.default = {
    title: 'Dynamic React Components/Components/Input',
    component: input_1.default,
    argTypes: {
        placeholder: {
            control: {
                type: 'text',
            },
        },
    },
};
const Template = (args) => (react_1.default.createElement(input_1.default, Object.assign({ "data-testid": "input" }, args)));
exports.InputStory = Template.bind({});
exports.InputStory.args = {
    placeholder: 'Placeholder',
    styles: {},
    className: '',
    onChange: () => { },
    disabled: false,
    value: '',
    type: 'text',
    name: '',
    id: '',
    withShadow: false,
    hover: false,
};
//# sourceMappingURL=input-component.stories.js.map