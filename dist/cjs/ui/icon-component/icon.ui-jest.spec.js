"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @jest-environment jsdom
 */
require("@testing-library/jest-dom");
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
const stories = __importStar(require("../../stories/icon-component.stories"));
const testing_react_1 = require("@storybook/testing-react");
const { IconStory } = (0, testing_react_1.composeStories)(stories);
describe('Icon', () => {
    it('renders icon', () => {
        const { getByTestId } = (0, react_2.render)(react_1.default.createElement(IconStory, null));
        const icon = getByTestId('icon');
        expect(icon).toBeInTheDocument();
    });
    it('renders icon with color', () => {
        const { getByTestId } = (0, react_2.render)(react_1.default.createElement(IconStory, { color: '#000000' }));
        const icon = getByTestId('icon');
        expect(icon).toHaveStyle('color: #000000');
    });
    it('renders icon with size', () => {
        const { getByTestId } = (0, react_2.render)(react_1.default.createElement(IconStory, { size: '1rem' }));
        const icon = getByTestId('icon');
        expect(icon).toHaveStyle('font-size: 1rem');
    });
    it('renders icon with styles', () => {
        const { getByTestId } = (0, react_2.render)(react_1.default.createElement(IconStory, { styles: { color: '#000000' } }));
        const icon = getByTestId('icon');
        expect(icon).toHaveStyle('color: #000000');
    });
    it('renders icon with className', () => {
        const { getByTestId } = (0, react_2.render)(react_1.default.createElement(IconStory, { className: 'icon' }));
        const icon = getByTestId('icon');
        expect(icon).toHaveClass('icon');
    });
    it('renders icon with fcIcon', () => {
        const { getByTestId } = (0, react_2.render)(react_1.default.createElement(IconStory, { faIcon: undefined, fcIcon: 'FcAbout' }));
        const icon = getByTestId('icon');
        expect(icon).toBeInTheDocument();
        const renderIcon = getByTestId('button-icon');
        expect(renderIcon).toBeInTheDocument();
    });
    it('renders icon with faIcon', () => {
        const { getByTestId } = (0, react_2.render)(react_1.default.createElement(IconStory, { faIcon: 'FaHome', fcIcon: undefined }));
        const icon = getByTestId('icon');
        expect(icon).toBeInTheDocument();
        const renderIcon = getByTestId('button-icon');
        expect(renderIcon).toBeInTheDocument();
    });
    it('not renders icon without Icon', () => {
        const { queryByTestId, getByTestId } = (0, react_2.render)(react_1.default.createElement(IconStory, { faIcon: undefined, fcIcon: undefined }));
        const icon = getByTestId('icon');
        expect(icon).toBeInTheDocument();
        const renderIcon = queryByTestId('button-icon');
        expect(renderIcon).not.toBeInTheDocument();
    });
});
//# sourceMappingURL=icon.ui-jest.spec.js.map