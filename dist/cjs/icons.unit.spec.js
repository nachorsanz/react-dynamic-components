"use strict";
/**
 * @jest-environment jsdom
 */
Object.defineProperty(exports, "__esModule", { value: true });
require("@testing-library/jest-dom");
const icons_1 = require("./icons");
describe('Icons', () => {
    it('get all icons', () => {
        const result = (0, icons_1.getAllFAIcons)();
        expect(result).toHaveLength(1612);
    });
    it('get icon with name', () => {
        const result = (0, icons_1.getFAIcon)('FaReact');
        expect(result).toBeDefined();
    });
    it('get all color icons', () => {
        const result = (0, icons_1.getAllColorIcons)();
        expect(result).toHaveLength(330);
    });
    it('get icon with name and color', () => {
        const result = (0, icons_1.getColorIcon)('FcAbout');
        expect(result).toBeDefined();
    });
});
//# sourceMappingURL=icons.unit.spec.js.map