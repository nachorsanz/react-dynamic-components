
/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render } from '@testing-library/react'
import { ReactDynamicButtonsStory } from '../../stories/button-component.stories';
import {expect, test} from '@jest/globals';




test('renders button', () => {
    const { getByTestId } = render( <ReactDynamicButtonsStory size='medium' onClick={()=>{}} variant="primary" option='button'  /> )
    const button = getByTestId('button')
    expect(button).toBeDefined()
  
})


test('renders button with text', () => {
    const { getByTestId } = render( <ReactDynamicButtonsStory size='medium' onClick={()=>{}} variant="primary" option='button' text='React Dynamic Buttons'  /> )
    const button = getByTestId('button')
    expect(button.textContent).toEqual(' React Dynamic Buttons ')

})


test('renders button with icon left', () => {
    const { getByTestId } = render( <ReactDynamicButtonsStory size='medium' onClick={()=>{}} variant="primary" option='button' icon={"FaReact"} iconPosition="left"  /> )
    const icon = getByTestId('button-icon')
    expect(icon).not.toBeNull()

})