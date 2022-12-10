/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import * as stories from '../../stories/button-component.stories';
import { composeStories } from '@storybook/testing-react';
const { ButtonStory } = composeStories(stories);
describe('Button', () => {
    it('renders button', () => {
        const { getByTestId } = render(React.createElement(ButtonStory, null));
        const button = getByTestId('button');
        expect(button).toBeInTheDocument();
    });
    it('renders button with text', () => {
        const { getByTestId } = render(React.createElement(ButtonStory, null));
        const button = getByTestId('button');
        expect(button.textContent).toEqual('Button');
    });
    it('renders button with icon left', () => {
        const { getByTestId } = render(React.createElement(ButtonStory, { faIcon: 'FaReact', iconPosition: "left" }));
        const icon = getByTestId('button-icon');
        expect(icon).toBeInTheDocument();
    });
    it('renders button with icon right', () => {
        const { getByTestId } = render(React.createElement(ButtonStory, { faIcon: 'FaReact', iconPosition: "right" }));
        const icon = getByTestId('button-icon');
        expect(icon).toBeInTheDocument();
    });
    it('renders button with color icon left', () => {
        const { getByTestId } = render(React.createElement(ButtonStory, { colorIcon: 'FcAbout', iconPosition: "left" }));
        const icon = getByTestId('button-icon');
        expect(icon).toBeInTheDocument();
    });
    it('renders button with color icon right', () => {
        const { getByTestId } = render(React.createElement(ButtonStory, { colorIcon: 'FcAbout', iconPosition: "right" }));
        const icon = getByTestId('button-icon');
        expect(icon).toBeInTheDocument();
    });
});
//# sourceMappingURL=button.ui-jest.spec.js.map