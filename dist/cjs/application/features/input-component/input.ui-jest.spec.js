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
const stories = __importStar(require("../../../stories/input-component.stories"));
const testing_react_1 = require("@storybook/testing-react");
const { InputStory } = (0, testing_react_1.composeStories)(stories);
describe('Input', () => {
    it('renders input', () => {
        const { getByTestId } = (0, react_2.render)(react_1.default.createElement(InputStory, null));
        const input = getByTestId('input');
        expect(input).toBeInTheDocument();
    });
    it('renders input with placeholder', () => {
        const { getByTestId } = (0, react_2.render)(react_1.default.createElement(InputStory, null));
        const input = getByTestId('input');
        expect(input).toHaveAttribute('placeholder', 'Placeholder');
    });
});
//# sourceMappingURL=input.ui-jest.spec.js.map