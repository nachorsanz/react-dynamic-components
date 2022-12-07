/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom'
import { getAllIcons, getIcon } from './icons'


 
 describe('Icons', () => {
    
    it('get all icons', () => {
        const result = getAllIcons()
        expect(result).toHaveLength(1612)
    })

    it('get icon with name', () => {
        const result = getIcon('FaReact')
        expect(result).toBeDefined()
    })
     
 })
 