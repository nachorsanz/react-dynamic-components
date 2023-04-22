var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import * as stories from '../../../stories/switcher-component.stories';
import { composeStories } from '@storybook/testing-react';
import { act } from 'react-dom/test-utils';
const { SwitcherStory } = composeStories(stories);
describe('Switcher', () => {
    it('renders switcher', () => {
        const { getByTestId } = render(React.createElement(SwitcherStory, null));
        const switcher = getByTestId('switcher');
        expect(switcher).toBeInTheDocument();
    });
    it('renders switcher with text', () => {
        const { getByTestId } = render(React.createElement(SwitcherStory, { text: "Switcher" }));
        const switcher = getByTestId('switcher');
        expect(switcher.textContent).toEqual('Switcher');
    });
    it('switcher background variant color not working when switcher is not checked', () => {
        const { getByTestId } = render(React.createElement(SwitcherStory, null));
        const switcherThumbWrapper = getByTestId('switcher-thumb-wrapper');
        expect(switcherThumbWrapper).toHaveStyle('background-color: #b5b5b5');
    });
    it('switcher background variant color working when switcher is checked', () => __awaiter(void 0, void 0, void 0, function* () {
        const { getByTestId } = render(React.createElement(SwitcherStory, { checked: true }));
        const switcher = getByTestId('switcher');
        yield act(() => switcher.click());
        const switcherThumbWrapper = getByTestId('switcher-thumb-wrapper');
        expect(switcherThumbWrapper).toHaveStyle('background-color: #007bff');
    }));
    it('switcher opacity appears when switcher is disabled', () => {
        const { getByTestId } = render(React.createElement(SwitcherStory, { disabled: true }));
        const switcher = getByTestId('switcher');
        expect(switcher).toHaveStyle('opacity: 0.5');
    });
    it('switcher thumb color changes with custom thumbColor', () => {
        const { getByTestId } = render(React.createElement(SwitcherStory, { checked: true, thumbColor: "#000000" }));
        const switcherThumb = getByTestId('switcher-thumb');
        expect(switcherThumb).toHaveStyle('background-color: #000000');
    });
    it('switcher background color do not change with custom bgColor when variant is selected', () => __awaiter(void 0, void 0, void 0, function* () {
        const { getByTestId } = render(React.createElement(SwitcherStory, { checked: true, bgColor: "#000000" }));
        const switcher = getByTestId('switcher');
        yield act(() => switcher.click());
        const switcherThumbWrapper = getByTestId('switcher-thumb-wrapper');
        expect(switcherThumbWrapper).toHaveStyle('background-color: #007bff');
    }));
    it('switcher background color changes with custom bgColor when variant is not selected', () => __awaiter(void 0, void 0, void 0, function* () {
        const { getByTestId } = render(React.createElement(SwitcherStory, { checked: true, bgColor: "#000000", variant: null }));
        const switcher = getByTestId('switcher');
        yield act(() => switcher.click());
        const switcherThumbWrapper = getByTestId('switcher-thumb-wrapper');
        expect(switcherThumbWrapper).toHaveStyle('background-color: #000000');
    }));
    it('switcher shape gets rounded when shape is not selected', () => __awaiter(void 0, void 0, void 0, function* () {
        const { getByTestId } = render(React.createElement(SwitcherStory, { shape: undefined }));
        const switcherThumbWrapper = getByTestId('switcher-thumb-wrapper');
        expect(switcherThumbWrapper).toHaveStyle('border-radius: 1.25rem');
    }));
    it('switcher shape gets rounded shape when rounded is selected', () => __awaiter(void 0, void 0, void 0, function* () {
        const { getByTestId } = render(React.createElement(SwitcherStory, { shape: "rounded" }));
        const switcherThumbWrapper = getByTestId('switcher-thumb-wrapper');
        expect(switcherThumbWrapper).toHaveStyle('border-radius: 1.25rem');
    }));
    it('switcher shape gets square shape when square is selected', () => __awaiter(void 0, void 0, void 0, function* () {
        const { getByTestId } = render(React.createElement(SwitcherStory, { shape: "square" }));
        const switcherThumbWrapper = getByTestId('switcher-thumb-wrapper');
        expect(switcherThumbWrapper).toHaveStyle('border-radius: 0.25rem');
    }));
    it('switcher shape gets sharp when sharp is selected', () => __awaiter(void 0, void 0, void 0, function* () {
        const { getByTestId } = render(React.createElement(SwitcherStory, { shape: "sharp" }));
        const switcherThumbWrapper = getByTestId('switcher-thumb-wrapper');
        expect(switcherThumbWrapper).toHaveStyle('border-radius: 0');
    }));
});
//# sourceMappingURL=switcher.ui-jest.spec.js.map