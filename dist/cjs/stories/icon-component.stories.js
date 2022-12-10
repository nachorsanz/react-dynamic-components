"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconStory = void 0;
const react_1 = __importDefault(require("react"));
const icon_1 = __importDefault(require("../ui/icon-component/icon"));
const icons_1 = require("../domain/icons");
exports.default = {
    title: 'Dynamic React Components/Components/Icon',
    component: icon_1.default,
    argTypes: {
        faIcon: {
            control: {
                type: 'select',
                options: (0, icons_1.getAllFAIcons)(),
            },
        },
        fcIcon: {
            control: {
                type: 'select',
                options: (0, icons_1.getAllColorIcons)(),
            },
        },
        color: {
            control: {
                type: 'color',
            },
        },
        size: {
            control: {
                type: 'text',
            },
        },
    },
};
const Template = (args) => (react_1.default.createElement(icon_1.default, Object.assign({ "data-testid": "icon" }, args)));
exports.IconStory = Template.bind({});
exports.IconStory.args = {
    faIcon: 'FaHome',
    fcIcon: undefined,
    color: '#000000',
    size: '1rem',
    styles: {},
    className: '',
};
//# sourceMappingURL=icon-component.stories.js.map