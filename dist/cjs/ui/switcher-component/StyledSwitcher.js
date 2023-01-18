"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __importDefault(require("styled-components"));
const StyledSwitcher = styled_components_1.default.label `
    font-size: 15px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    position: relative;
    ${(props) => props.disabled &&
    `
      &{
        pointer-events: none;
        cursor: default;
        opacity: 0.5;
      }`};

    input {
        position: absolute;
        left: 0;
        opacity: 0;
        outline: none;
        z-index: -1;
    }
`;
exports.default = StyledSwitcher;
//# sourceMappingURL=StyledSwitcher.js.map