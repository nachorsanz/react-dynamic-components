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
require("@testing-library/jest-dom");
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
const stories = __importStar(require("../../stories/select-component.stories"));
const testing_react_1 = require("@storybook/testing-react");
const test_utils_1 = require("react-dom/test-utils");
const { SelectComponentStory } = (0, testing_react_1.composeStories)(stories);
describe('Select', () => {
    it('renders select', () => {
        const { getByTestId } = (0, react_2.render)(react_1.default.createElement(SelectComponentStory, null));
        const select = getByTestId('select');
        expect(select).toBeInTheDocument();
    });
    it('renders select placeholder', () => {
        const { getByTestId } = (0, react_2.render)(react_1.default.createElement(SelectComponentStory, null));
        const selectPlaceholder = getByTestId('select-placeholder');
        expect(selectPlaceholder).toBeInTheDocument();
    });
    it('should render select content after click on select placeholder', () => __awaiter(void 0, void 0, void 0, function* () {
        const { getByTestId } = (0, react_2.render)(react_1.default.createElement(SelectComponentStory, null));
        const selectPlaceholder = getByTestId('select-placeholder');
        yield (0, test_utils_1.act)(() => selectPlaceholder.click());
        const selectContent = getByTestId('select-list-content');
        expect(selectContent).toBeInTheDocument();
    }));
    it('should change the placeholder after click on item from the content list', () => __awaiter(void 0, void 0, void 0, function* () {
        const { getByTestId, getAllByTestId } = (0, react_2.render)(react_1.default.createElement(SelectComponentStory, null));
        const selectPlaceholder = getByTestId('select-placeholder');
        yield (0, test_utils_1.act)(() => selectPlaceholder.click());
        const contentList = getAllByTestId('select-item');
        const firtsItem = contentList[0];
        yield (0, test_utils_1.act)(() => firtsItem.click());
        expect(selectPlaceholder.textContent).toEqual(firtsItem.textContent);
    }));
});
//# sourceMappingURL=select.ui-jest.spec.js.map