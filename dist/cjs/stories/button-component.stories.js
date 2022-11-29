"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactDynamicButtonsStory = void 0;
const react_1 = __importDefault(require("react"));
const index_1 = __importDefault(require("../index"));
exports.default = {
    title: 'npm/component/React Dynamic Buttons',
    component: index_1.default,
};
const Template = (args) => react_1.default.createElement(index_1.default, Object.assign({}, args));
exports.ReactDynamicButtonsStory = Template.bind({});
exports.ReactDynamicButtonsStory.args = {
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