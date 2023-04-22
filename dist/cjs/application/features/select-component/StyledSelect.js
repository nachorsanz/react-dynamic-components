"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __importDefault(require("styled-components"));
const StyledSelect = styled_components_1.default.div `
    padding: 1.5rem;
    border-radius: 4px;
    box-shadow: 0 0.5em 1em 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;
    background-color: ${(props) => props.backgroundColor};
    color: ${(props) => props.textColor};
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
    span {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        width: 100%;
    }
`;
exports.default = StyledSelect;
//# sourceMappingURL=StyledSelect.js.map