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
const icons_1 = require("../../../domain/services/icons");
const StyledButton_1 = __importDefault(require("./StyledButton"));
const utils_1 = require("../../utils/utils");
const Button = (_a) => {
    var props = __rest(_a, []);
    const { text = 'Button', size = 'medium', variant = 'primary', styles = {}, className = '', onClick = () => { }, disabled = false, bgColor = '', textColor = '', faIcon = null, colorIcon = null, iconPosition = null, withShadow = false, hover = false, } = props;
    let _style = {};
    if (size)
        _style = Object.assign(Object.assign({}, _style), (0, utils_1.getSizeProps)(size));
    if (variant && !hover)
        _style = Object.assign(Object.assign({}, _style), (0, utils_1.getVariantProps)(variant));
    if (variant && withShadow)
        _style = Object.assign(Object.assign({}, _style), (0, utils_1.getShadowProps)(variant));
    if (styles)
        _style = Object.assign(Object.assign({}, _style), styles);
    if (faIcon && colorIcon)
        throw new Error("You can't use both icon and colorIcon props at the same time");
    return (react_1.default.createElement(StyledButton_1.default, { "data-testid": "button", className: className, style: _style, onClick: onClick, disabled: disabled, bgColor: bgColor, textColor: textColor, hover: hover ? variant : null },
        faIcon &&
            !colorIcon &&
            iconPosition === 'left' &&
            (0, icons_1.getFAIcon)(faIcon),
        colorIcon &&
            !faIcon &&
            iconPosition === 'left' &&
            (0, icons_1.getColorIcon)(colorIcon),
        text,
        faIcon &&
            !colorIcon &&
            iconPosition === 'right' &&
            (0, icons_1.getFAIcon)(faIcon),
        colorIcon &&
            !faIcon &&
            iconPosition === 'right' &&
            (0, icons_1.getColorIcon)(colorIcon)));
};
exports.default = Button;
//# sourceMappingURL=button.js.map