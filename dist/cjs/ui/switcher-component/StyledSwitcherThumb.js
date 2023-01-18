"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __importDefault(require("styled-components"));
const StyledSwitcherThumb = styled_components_1.default.span `
    display: flex;
    align-items: center;
    flex-shrink: 0;
    width: 3.2rem;
    height: 1.575rem;
    padding: 0.2rem;
    background-color: #b5b5b5;
    border-radius: 4px;
    padding: 0.5rem;
    transition: background .15s ease-out,box-shadow .15s ease-out;
    span{
      display: block;
      border-radius: 4px;
      height: 100%;
      aspect-ratio: 1/1;
      background-color: #f5f5f5;
      box-shadow: 0 3px 1px 0 rgb(0 0 0 / 5%), 0 2px 2px 0 rgb(0 0 0 / 10%), 0 3px 3px 0 rgb(0 0 0 / 5%);
      transition: transform .15s ease-out;
      will-change: transform;
      transform-origin: left;
    }
    ${(props) => props.bgColor && props.checked &&
    `
      &{
        background-color: ${props.bgColor};
      }`};
    ${(props) => props.thumbColor &&
    `
      span{
        background-color: ${props.thumbColor};
      }`};
    ${(props) => props.checked &&
    `
        span{
          transform: translate3d(100%, 0, 0);
        }`};
`;
exports.default = StyledSwitcherThumb;
//# sourceMappingURL=StyledSwitcherThumb.js.map