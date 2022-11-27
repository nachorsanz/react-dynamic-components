"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __importDefault(require("styled-components"));
const StyledButton = styled_components_1.default.button `
  font-size: 15px;
  font-weight: 500;
  border-radius: 4px;
  text-align: center;
  padding: 0.8rem 2rem;
  border: 0px;
  ${(props) => props.textColor &&
    `& {
    color: ${props.color};
  }`};
  ${(props) => props.bgColor &&
    `& {
    background-color: ${props.bgColor};
  }`};
  ${(props) => props.border &&
    `&::after {
    border: ${props.border};
  }
`};
 
`;
exports.default = StyledButton;
//# sourceMappingURL=StyledButton.js.map