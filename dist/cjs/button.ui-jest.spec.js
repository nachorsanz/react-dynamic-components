"use strict";
/**
 * @jest-environment jsdom
 */
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
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
const stories = __importStar(require("./stories/button-component.stories"));
const testing_react_1 = require("@storybook/testing-react");
const { ReactDynamicButtonsStory } = (0, testing_react_1.composeStories)(stories);
require("@testing-library/jest-dom");
describe('Button', () => {
    it('renders button', () => {
        const { getByTestId } = (0, react_2.render)(react_1.default.createElement(ReactDynamicButtonsStory, null));
        const button = getByTestId('button');
        expect(button).toBeInTheDocument();
    });
    it('renders button with text', () => {
        const { getByTestId } = (0, react_2.render)(react_1.default.createElement(ReactDynamicButtonsStory, null));
        const button = getByTestId('button');
        expect(button.textContent).toEqual('React Dynamic Buttons');
    });
    it('renders button with icon left', () => {
        const { getByTestId } = (0, react_2.render)(react_1.default.createElement(ReactDynamicButtonsStory, { faIcon: 'FaReact', iconPosition: "left" }));
        const icon = getByTestId('button-icon');
        expect(icon).toBeInTheDocument();
    });
    it('renders button with icon right', () => {
        const { getByTestId } = (0, react_2.render)(react_1.default.createElement(ReactDynamicButtonsStory, { faIcon: 'FaReact', iconPosition: "right" }));
        const icon = getByTestId('button-icon');
        expect(icon).toBeInTheDocument();
    });
    it('renders button with color icon left', () => {
        const { getByTestId } = (0, react_2.render)(react_1.default.createElement(ReactDynamicButtonsStory, { colorIcon: 'FcAbout', iconPosition: "left" }));
        const icon = getByTestId('button-icon');
        expect(icon).toBeInTheDocument();
    });
    it('renders button with color icon right', () => {
        const { getByTestId } = (0, react_2.render)(react_1.default.createElement(ReactDynamicButtonsStory, { colorIcon: 'FcAbout', iconPosition: "right" }));
        const icon = getByTestId('button-icon');
        expect(icon).toBeInTheDocument();
    });
});
//# sourceMappingURL=button.ui-jest.spec.js.map