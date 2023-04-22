var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import * as stories from '../../../stories/select-component.stories';
import { composeStories } from '@storybook/testing-react';
import { act } from 'react-dom/test-utils';
const { SelectComponentStory } = composeStories(stories);
describe('Select', () => {
    it('renders select', () => {
        const { getByTestId } = render(React.createElement(SelectComponentStory, null));
        const select = getByTestId('select');
        expect(select).toBeInTheDocument();
    });
    it('renders select placeholder', () => {
        const { getByTestId } = render(React.createElement(SelectComponentStory, null));
        const selectPlaceholder = getByTestId('select-placeholder');
        expect(selectPlaceholder).toBeInTheDocument();
    });
    it('should render select content after click on select placeholder', () => __awaiter(void 0, void 0, void 0, function* () {
        const { getByTestId } = render(React.createElement(SelectComponentStory, null));
        const selectPlaceholder = getByTestId('select-placeholder');
        yield act(() => selectPlaceholder.click());
        const selectContent = getByTestId('select-list-content');
        expect(selectContent).toBeInTheDocument();
    }));
    it('should change the placeholder after click on item from the content list', () => __awaiter(void 0, void 0, void 0, function* () {
        const { getByTestId, getAllByTestId } = render(React.createElement(SelectComponentStory, null));
        const selectPlaceholder = getByTestId('select-placeholder');
        yield act(() => selectPlaceholder.click());
        const contentList = getAllByTestId('select-item');
        const firtsItem = contentList[0];
        yield act(() => firtsItem.click());
        expect(selectPlaceholder.textContent).toEqual(firtsItem.textContent);
    }));
});
//# sourceMappingURL=select.ui-jest.spec.js.map