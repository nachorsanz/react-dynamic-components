"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalStory = void 0;
const react_1 = __importDefault(require("react"));
const modal_1 = __importDefault(require("../ui/modal-component/modal"));
exports.default = {
    title: 'Dynamic React Components/Components/Modal',
    component: modal_1.default,
};
const Template = (args) => react_1.default.createElement(modal_1.default, Object.assign({ "data-testid": "modal" }, args));
exports.ModalStory = Template.bind({});
exports.ModalStory.args = {
    children: 'Modal',
};
//# sourceMappingURL=modal-component.stories.js.map