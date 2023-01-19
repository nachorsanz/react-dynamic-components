"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectComponentStory = void 0;
const react_1 = __importDefault(require("react"));
const select_1 = __importDefault(require("../ui/select-component/select"));
exports.default = {
    title: 'Dynamic React Components/Components/Select',
    component: select_1.default,
};
const Template = (args) => (react_1.default.createElement(select_1.default, Object.assign({ "data-testid": "select" }, args)));
exports.SelectComponentStory = Template.bind({});
exports.SelectComponentStory.args = {
    selectContent: [
        {
            key: 'Oviedo',
            value: 'Oviedo',
        },
        {
            key: 'Zaragoza',
            value: 'Zaragoza',
        },
        {
            key: 'Barcelona',
            value: 'Barcelona',
        },
        {
            key: 'Madrid',
            value: 'Madrid',
        },
    ],
    selectPlaceHolder: 'Select one option',
    shouldHaveValue: true,
};
//# sourceMappingURL=select-component.stories.js.map