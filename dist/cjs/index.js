"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactDynamicButtons = void 0;
const react_1 = __importDefault(require("react"));
const StyledButton_1 = __importDefault(require("./StyledButton"));
const ReactDynamicButtons = ({ children, size, styles, onClick, disabled = false, type, bgColor, border, textColor }) => {
    const _style = styles || {};
    switch (size) {
        case 'small':
            _style.fontSize = '12px';
            _style.padding = '5px 10px';
            break;
        case 'medium':
            _style.fontSize = '14px';
            _style.padding = '10px 15px';
            break;
        case 'large':
            _style.fontSize = '16px';
            _style.padding = '15px 20px';
            break;
    }
    _style.padding = '5px 10px';
    return (react_1.default.createElement(StyledButton_1.default, { style: _style, onClick: onClick, type: type, disabled: disabled, bgColor: bgColor, border: border, textColor: textColor }, children));
};
exports.ReactDynamicButtons = ReactDynamicButtons;
//# sourceMappingURL=index.js.map