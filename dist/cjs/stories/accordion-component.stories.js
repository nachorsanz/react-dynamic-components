"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccordionStory = void 0;
const react_1 = __importDefault(require("react"));
const accordion_1 = __importDefault(require("../ui/accordion-component/accordion"));
exports.default = {
    title: 'Dynamic React Components/Components/Accordion',
    component: accordion_1.default,
    argTypes: {
        wipComponent: {
            control: {
                type: 'boolean',
            },
        },
    },
};
const Template = (args) => (react_1.default.createElement(accordion_1.default, Object.assign({ "data-testid": "accordion" }, args)));
exports.AccordionStory = Template.bind({});
exports.AccordionStory.args = {
    sections: [
        {
            title: 'Section 1',
            children: react_1.default.createElement("p", null, "Section 1 content"),
        },
        {
            title: 'Section 2',
            children: react_1.default.createElement("p", null, "Section 2 content"),
        },
        {
            title: 'Section 3',
            children: react_1.default.createElement("p", null, "Section 3 content"),
        },
    ],
    wipComponent: true,
};
//# sourceMappingURL=accordion-component.stories.js.map