/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom'
import React from 'react'
import { render } from '@testing-library/react'
import * as stories from '../../stories/switcher-component.stories'
import { composeStories } from '@storybook/testing-react'
import { act } from 'react-dom/test-utils'

const { SwitcherStory } = composeStories(stories)

describe('Switcher', () => {
    it('renders switcher', () => {
        const { getByTestId } = render(<SwitcherStory />)
        const switcher = getByTestId('switcher')
        expect(switcher).toBeInTheDocument()
    })

    it('renders switcher with text', () => {
        const { getByTestId } = render(<SwitcherStory text="Switcher" />)
        const switcher = getByTestId('switcher')
        expect(switcher.textContent).toEqual('Switcher')
    })

    it('switcher background variant color not working when switcher is not checked', () => {
        const { getByTestId } = render(<SwitcherStory />)
        const switcherThumbWrapper = getByTestId('switcher-thumb-wrapper')
        expect(switcherThumbWrapper).toHaveStyle('background-color: #b5b5b5')
    })

    it('switcher background variant color working when switcher is checked', async () => {
        const { getByTestId } = render(<SwitcherStory />)
        const switcher = getByTestId('switcher')
        await act(() => switcher.click())

        const switcherThumbWrapper = getByTestId('switcher-thumb-wrapper')
        expect(switcherThumbWrapper).toHaveStyle('background-color: #007bff')
    })

    it('switcher opacity appears when switcher is disabled', () => {
        const { getByTestId } = render(<SwitcherStory disabled />)
        const switcher = getByTestId('switcher')
        expect(switcher).toHaveStyle('opacity: 0.5')
    })

    it('switcher thumb color changes with custom thumbColor', () => {
        const { getByTestId } = render(<SwitcherStory thumbColor="#000000" />)
        const switcherThumb = getByTestId('switcher-thumb')
        expect(switcherThumb).toHaveStyle('background-color: #000000')
    })

    it('switcher background color do not change with custom bgColor when variant is selected', async () => {
        const { getByTestId } = render(<SwitcherStory bgColor="#000000" />)
        const switcher = getByTestId('switcher')
        await act(() => switcher.click())

        const switcherThumbWrapper = getByTestId('switcher-thumb-wrapper')
        expect(switcherThumbWrapper).toHaveStyle('background-color: #007bff')
    })

    it('switcher background color changes with custom bgColor when variant is not selected', async () => {
        const { getByTestId } = render(
            <SwitcherStory bgColor="#000000" variant={null} />
        )
        const switcher = getByTestId('switcher')
        await act(() => switcher.click())

        const switcherThumbWrapper = getByTestId('switcher-thumb-wrapper')
        expect(switcherThumbWrapper).toHaveStyle('background-color: #000000')
    })

    it('switcher shape gets rounded when shape is not selected', async () => {
        const { getByTestId } = render(<SwitcherStory shape={null} />)
        const switcherThumbWrapper = getByTestId('switcher-thumb-wrapper')
        expect(switcherThumbWrapper).toHaveStyle('border-radius: 10px')
    })

    it('switcher shape gets square shape when square is selected', async () => {
        const { getByTestId } = render(<SwitcherStory shape={'square'} />)
        const switcherThumbWrapper = getByTestId('switcher-thumb-wrapper')
        expect(switcherThumbWrapper).toHaveStyle('border-radius: 4px')
    })

    it('switcher shape gets rounded shape when rounded is selected', async () => {
        const { getByTestId } = render(<SwitcherStory shape={'rounded'} />)
        const switcherThumbWrapper = getByTestId('switcher-thumb-wrapper')
        expect(switcherThumbWrapper).toHaveStyle('border-radius: 10px')
    })

    it('switcher shape gets sharp when sharp is selected', async () => {
        const { getByTestId } = render(<SwitcherStory shape={'sharp'} />)
        const switcherThumbWrapper = getByTestId('switcher-thumb-wrapper')
        expect(switcherThumbWrapper).toHaveStyle('border-radius: 0')
    })
})
