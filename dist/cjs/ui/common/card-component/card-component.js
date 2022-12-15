"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const StyledCard = styled_components_1.default.div `
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    width: 300px;
`;
const Card = ({ children, styles }) => {
    return (react_1.default.createElement(StyledCard, { style: styles }, children));
};
exports.default = Card;
//# sourceMappingURL=card-component.js.map