/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import * as stories from '../../../stories/icon-component.stories';
import { composeStories } from '@storybook/testing-react';
const { IconStory } = composeStories(stories);
describe('Icon', () => {
    it('renders icon', () => {
        const { getByTestId } = render(React.createElement(IconStory, null));
        const icon = getByTestId('icon');
        expect(icon).toBeInTheDocument();
    });
    it('renders icon with color', () => {
        const { getByTestId } = render(React.createElement(IconStory, { color: '#000000' }));
        const icon = getByTestId('icon');
        expect(icon).toHaveStyle('color: #000000');
    });
    it('renders icon with size', () => {
        const { getByTestId } = render(React.createElement(IconStory, { size: '1rem' }));
        const icon = getByTestId('icon');
        expect(icon).toHaveStyle('font-size: 1rem');
    });
    it('renders icon with styles', () => {
        const { getByTestId } = render(React.createElement(IconStory, { styles: { color: '#000000' } }));
        const icon = getByTestId('icon');
        expect(icon).toHaveStyle('color: #000000');
    });
    it('renders icon with className', () => {
        const { getByTestId } = render(React.createElement(IconStory, { className: 'icon' }));
        const icon = getByTestId('icon');
        expect(icon).toHaveClass('icon');
    });
    it('renders icon with fcIcon', () => {
        const { getByTestId } = render(React.createElement(IconStory, { faIcon: undefined, fcIcon: 'FcAbout' }));
        const icon = getByTestId('icon');
        expect(icon).toBeInTheDocument();
        const renderIcon = getByTestId('button-icon');
        expect(renderIcon).toBeInTheDocument();
    });
    it('renders icon with faIcon', () => {
        const { getByTestId } = render(React.createElement(IconStory, { faIcon: 'FaHome', fcIcon: undefined }));
        const icon = getByTestId('icon');
        expect(icon).toBeInTheDocument();
        const renderIcon = getByTestId('button-icon');
        expect(renderIcon).toBeInTheDocument();
    });
    it('not renders icon without Icon', () => {
        const { queryByTestId, getByTestId } = render(React.createElement(IconStory, { faIcon: undefined, fcIcon: undefined }));
        const icon = getByTestId('icon');
        expect(icon).toBeInTheDocument();
        const renderIcon = queryByTestId('button-icon');
        expect(renderIcon).not.toBeInTheDocument();
    });
});
//# sourceMappingURL=icon.ui-jest.spec.js.map