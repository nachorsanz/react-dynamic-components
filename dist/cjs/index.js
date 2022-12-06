"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const icons_1 = require("./icons");
const StyledButton_1 = __importDefault(require("./StyledButton"));
const utils_1 = require("./utils");
const ReactDynamicButtons = (_a) => {
    var props = __rest(_a, []);
    const { text = 'Button', size = 'medium', variant = 'primary', styles = {}, className = '', onClick = () => { }, disabled = false, bgColor = '', textColor = '', icon = '', iconPosition = null, withShadow = false, } = props;
    let _style = {};
    if (size)
        _style = Object.assign(Object.assign({}, _style), (0, utils_1.getSizeProps)(size));
    if (variant)
        _style = Object.assign(Object.assign({}, _style), (0, utils_1.getVariantProps)(variant));
    if (variant && withShadow)
        _style = Object.assign(Object.assign({}, _style), (0, utils_1.getShadowProps)(variant));
    if (styles)
        _style = Object.assign(Object.assign({}, _style), styles);
    return (react_1.default.createElement(StyledButton_1.default, { className: className, style: _style, onClick: onClick, disabled: disabled, bgColor: bgColor, textColor: textColor },
        icon && iconPosition === 'left' && (0, icons_1.getIcon)(icon),
        " ",
        text,
        ' ',
        icon && iconPosition === 'right' && (0, icons_1.getIcon)(icon)));
};
exports.default = ReactDynamicButtons;
//# sourceMappingURL=index.js.map