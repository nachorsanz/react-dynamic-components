import '@testing-library/jest-dom'
import React from 'react'
import { render } from '@testing-library/react'
import * as stories from '../../../stories/select-component.stories'
import { composeStories } from '@storybook/testing-react'
import { act } from 'react-dom/test-utils'

const { SelectComponentStory } = composeStories(stories)

describe('Select', () => {
    it('renders select', () => {
        const { getByTestId } = render(<SelectComponentStory />)
        const select = getByTestId('select')
        expect(select).toBeInTheDocument()
    })

    it('renders select placeholder', () => {
        const { getByTestId } = render(<SelectComponentStory />)
        const selectPlaceholder = getByTestId('select-placeholder')
        expect(selectPlaceholder).toBeInTheDocument()
    })

    it('should render select content after click on select placeholder', async () => {
        const { getByTestId } = render(<SelectComponentStory />)
        const selectPlaceholder = getByTestId('select-placeholder')
        await act(() => selectPlaceholder.click())
        const selectContent = getByTestId('select-list-content')
        expect(selectContent).toBeInTheDocument()
    })

    it('should change the placeholder after click on item from the content list', async () => {
        const { getByTestId, getAllByTestId } = render(<SelectComponentStory />)
        const selectPlaceholder = getByTestId('select-placeholder')
        await act(() => selectPlaceholder.click())
        const contentList = getAllByTestId('select-item')
        const firtsItem = contentList[0]
        await act(() => firtsItem.click())
        expect(selectPlaceholder.textContent).toEqual(firtsItem.textContent)
    })
})
