"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __importDefault(require("styled-components"));
const StyledAccordionWrapper = styled_components_1.default.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    text-align: center;
    cursor: pointer;
    padding: 12px 0;
    border-top: 1px solid #ecedef;
`;
exports.default = StyledAccordionWrapper;
//# sourceMappingURL=StyledAccordionWrapper.js.map