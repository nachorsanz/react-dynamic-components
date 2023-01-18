"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __importDefault(require("styled-components"));
const StyledSelectItem = styled_components_1.default.div `
    padding: 1rem;
    cursor: pointer;
    &:hover {
        background-color: #d6d6d6;
    }
    span {
        display: block;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`;
exports.default = StyledSelectItem;
//# sourceMappingURL=StyledSelectItem.js.map