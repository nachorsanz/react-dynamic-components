/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import * as stories from './stories/button-component.stories';
import { composeStories } from '@storybook/testing-react';
const { ReactDynamicButtonsStory } = composeStories(stories);
import '@testing-library/jest-dom';
describe('Button', () => {
    it('renders button', () => {
        const { getByTestId } = render(React.createElement(ReactDynamicButtonsStory, null));
        const button = getByTestId('button');
        expect(button).toBeInTheDocument();
    });
    it('renders button with text', () => {
        const { getByTestId } = render(React.createElement(ReactDynamicButtonsStory, null));
        const button = getByTestId('button');
        expect(button.textContent).toEqual('React Dynamic Buttons');
    });
    it('renders button with icon left', () => {
        const { getByTestId } = render(React.createElement(ReactDynamicButtonsStory, { faIcon: 'FaReact', iconPosition: "left" }));
        const icon = getByTestId('button-icon');
        expect(icon).toBeInTheDocument();
    });
    it('renders button with icon right', () => {
        const { getByTestId } = render(React.createElement(ReactDynamicButtonsStory, { faIcon: 'FaReact', iconPosition: "right" }));
        const icon = getByTestId('button-icon');
        expect(icon).toBeInTheDocument();
    });
    it('renders button with color icon left', () => {
        const { getByTestId } = render(React.createElement(ReactDynamicButtonsStory, { colorIcon: 'FcAbout', iconPosition: "left" }));
        const icon = getByTestId('button-icon');
        expect(icon).toBeInTheDocument();
    });
    it('renders button with color icon right', () => {
        const { getByTestId } = render(React.createElement(ReactDynamicButtonsStory, { colorIcon: 'FcAbout', iconPosition: "right" }));
        const icon = getByTestId('button-icon');
        expect(icon).toBeInTheDocument();
    });
});
//# sourceMappingURL=index.ui-jest.spec.js.map