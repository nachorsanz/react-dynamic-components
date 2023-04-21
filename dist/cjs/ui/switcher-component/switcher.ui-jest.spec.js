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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
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
const stories = __importStar(require("../../stories/switcher-component.stories"));
const testing_react_1 = require("@storybook/testing-react");
const test_utils_1 = require("react-dom/test-utils");
const { SwitcherStory } = (0, testing_react_1.composeStories)(stories);
describe('Switcher', () => {
    it('renders switcher', () => {
        const { getByTestId } = (0, react_2.render)(react_1.default.createElement(SwitcherStory, null));
        const switcher = getByTestId('switcher');
        expect(switcher).toBeInTheDocument();
    });
    it('renders switcher with text', () => {
        const { getByTestId } = (0, react_2.render)(react_1.default.createElement(SwitcherStory, { text: "Switcher" }));
        const switcher = getByTestId('switcher');
        expect(switcher.textContent).toEqual('Switcher');
    });
    it('switcher background variant color not working when switcher is not checked', () => {
        const { getByTestId } = (0, react_2.render)(react_1.default.createElement(SwitcherStory, null));
        const switcherThumbWrapper = getByTestId('switcher-thumb-wrapper');
        expect(switcherThumbWrapper).toHaveStyle('background-color: #b5b5b5');
    });
    it('switcher background variant color working when switcher is checked', () => __awaiter(void 0, void 0, void 0, function* () {
        const { getByTestId } = (0, react_2.render)(react_1.default.createElement(SwitcherStory, { checked: true }));
        const switcher = getByTestId('switcher');
        yield (0, test_utils_1.act)(() => switcher.click());
        const switcherThumbWrapper = getByTestId('switcher-thumb-wrapper');
        expect(switcherThumbWrapper).toHaveStyle('background-color: #007bff');
    }));
    it('switcher opacity appears when switcher is disabled', () => {
        const { getByTestId } = (0, react_2.render)(react_1.default.createElement(SwitcherStory, { disabled: true }));
        const switcher = getByTestId('switcher');
        expect(switcher).toHaveStyle('opacity: 0.5');
    });
    it('switcher thumb color changes with custom thumbColor', () => {
        const { getByTestId } = (0, react_2.render)(react_1.default.createElement(SwitcherStory, { checked: true, thumbColor: "#000000" }));
        const switcherThumb = getByTestId('switcher-thumb');
        expect(switcherThumb).toHaveStyle('background-color: #000000');
    });
    it('switcher background color do not change with custom bgColor when variant is selected', () => __awaiter(void 0, void 0, void 0, function* () {
        const { getByTestId } = (0, react_2.render)(react_1.default.createElement(SwitcherStory, { checked: true, bgColor: "#000000" }));
        const switcher = getByTestId('switcher');
        yield (0, test_utils_1.act)(() => switcher.click());
        const switcherThumbWrapper = getByTestId('switcher-thumb-wrapper');
        expect(switcherThumbWrapper).toHaveStyle('background-color: #007bff');
    }));
    it('switcher background color changes with custom bgColor when variant is not selected', () => __awaiter(void 0, void 0, void 0, function* () {
        const { getByTestId } = (0, react_2.render)(react_1.default.createElement(SwitcherStory, { checked: true, bgColor: "#000000", variant: null }));
        const switcher = getByTestId('switcher');
        yield (0, test_utils_1.act)(() => switcher.click());
        const switcherThumbWrapper = getByTestId('switcher-thumb-wrapper');
        expect(switcherThumbWrapper).toHaveStyle('background-color: #000000');
    }));
    it('switcher shape gets rounded when shape is not selected', () => __awaiter(void 0, void 0, void 0, function* () {
        const { getByTestId } = (0, react_2.render)(react_1.default.createElement(SwitcherStory, { shape: undefined }));
        const switcherThumbWrapper = getByTestId('switcher-thumb-wrapper');
        expect(switcherThumbWrapper).toHaveStyle('border-radius: 1.25rem');
    }));
    it('switcher shape gets rounded shape when rounded is selected', () => __awaiter(void 0, void 0, void 0, function* () {
        const { getByTestId } = (0, react_2.render)(react_1.default.createElement(SwitcherStory, { shape: "rounded" }));
        const switcherThumbWrapper = getByTestId('switcher-thumb-wrapper');
        expect(switcherThumbWrapper).toHaveStyle('border-radius: 1.25rem');
    }));
    it('switcher shape gets square shape when square is selected', () => __awaiter(void 0, void 0, void 0, function* () {
        const { getByTestId } = (0, react_2.render)(react_1.default.createElement(SwitcherStory, { shape: "square" }));
        const switcherThumbWrapper = getByTestId('switcher-thumb-wrapper');
        expect(switcherThumbWrapper).toHaveStyle('border-radius: 0.25rem');
    }));
    it('switcher shape gets sharp when sharp is selected', () => __awaiter(void 0, void 0, void 0, function* () {
        const { getByTestId } = (0, react_2.render)(react_1.default.createElement(SwitcherStory, { shape: "sharp" }));
        const switcherThumbWrapper = getByTestId('switcher-thumb-wrapper');
        expect(switcherThumbWrapper).toHaveStyle('border-radius: 0');
    }));
});
//# sourceMappingURL=switcher.ui-jest.spec.js.map