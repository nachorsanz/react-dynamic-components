/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom'
import { getAllColorIcons, getAllIcons, getColorIcon, getIcon } from './icons'

describe('Icons', () => {
    it('get all icons', () => {
        const result = getAllIcons()
        expect(result).toHaveLength(1612)
    })

    it('get icon with name', () => {
        const result = getIcon('FaReact')
        expect(result).toBeDefined()
    })

    it('get all color icons', () => {
        const result = getAllColorIcons()
        expect(result).toHaveLength(330)
    })


    it('get icon with name and color', () => {
        const result = getColorIcon('FcAbout')
        expect(result).toBeDefined()
    })


})
