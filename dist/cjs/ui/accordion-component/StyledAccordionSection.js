"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __importDefault(require("styled-components"));
const StyledAccordionSection = styled_components_1.default.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: arial, sans-serif;
    font-size: 16px;
    line-height: 1.5;
    color: #202124;
    max-width: 650px;
    width: 100%;
`;
exports.default = StyledAccordionSection;
//# sourceMappingURL=StyledAccordionSection.js.map