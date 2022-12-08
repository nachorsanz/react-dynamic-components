/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom'
import React from 'react'
import { render } from '@testing-library/react'
import * as stories from '../../stories/input-component.stories'
import { composeStories } from '@storybook/testing-react'

const { InputStory } = composeStories(stories)

describe('Input', () => {
    it('renders input', () => {
        const { getByTestId } = render(<InputStory />)
        const input = getByTestId('input')
        expect(input).toBeInTheDocument()
    })

    it('renders input with placeholder', () => {
        const { getByTestId } = render(<InputStory />)
        const input = getByTestId('input')
        expect(input).toHaveAttribute('placeholder', 'Placeholder')
    })
<<<<<<< HEAD
})
=======
})
>>>>>>> 1746e20 (chore: add input test)
