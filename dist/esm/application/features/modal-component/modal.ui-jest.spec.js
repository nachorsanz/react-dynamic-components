/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import * as stories from '../../../stories/modal-component.stories';
import { composeStories } from '@storybook/testing-react';
const { ModalStory } = composeStories(stories);
describe('Modal', () => {
    it('renders modal with isOpen is true', () => {
        const { getByTestId } = render(React.createElement(ModalStory, null));
        const modal = getByTestId('modal');
        expect(modal).toBeInTheDocument();
    });
    it('Not renders modal with isOpen is false', () => {
        const { queryByTestId } = render(React.createElement(ModalStory, { isOpen: false }));
        const modal = queryByTestId('modal');
        expect(modal).not.toBeInTheDocument();
    });
});
//# sourceMappingURL=modal.ui-jest.spec.js.map