"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const card_component_1 = __importDefault(require("../common/card-component/card-component"));
const Modal = ({ children, styles }) => {
    return (react_1.default.createElement(card_component_1.default, { styles: styles },
        "Modal",
        children));
};
exports.default = Modal;
//# sourceMappingURL=modal.js.map