"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __importDefault(require("styled-components"));
const ModalWrapper = styled_components_1.default.div `
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    display: flex;
    flex-direction: column;
    max-height: 90%;
    max-width: 90%;
    overflow-y: auto;
    padding: 5px;
`;
exports.default = ModalWrapper;
//# sourceMappingURL=modal-wrapper.js.map