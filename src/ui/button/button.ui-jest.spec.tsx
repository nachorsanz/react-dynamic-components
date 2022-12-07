
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



