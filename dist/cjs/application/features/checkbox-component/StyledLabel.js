"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledCheckbox = exports.StyledLabel = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.StyledLabel = styled_components_1.default.label `
  display: flex;
  align-items: center;
`;
exports.StyledCheckbox = styled_components_1.default.input `
  cursor: pointer;

`;
//# sourceMappingURL=StyledLabel.js.map