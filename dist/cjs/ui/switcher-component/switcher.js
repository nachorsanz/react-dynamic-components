"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const react_1 = __importStar(require("react"));
const StyledSwitcher_1 = __importDefault(require("./StyledSwitcher"));
const StyledSwitcherThumb_1 = __importDefault(require("./StyledSwitcherThumb"));
const StyledSwitcherLabel_1 = __importDefault(require("./StyledSwitcherLabel"));
const utils_1 = require("../../domain/utils");
const Switcher = (_a) => {
    var props = __rest(_a, []);
    const [checked, setChecked] = (0, react_1.useState)(false);
    const { text = '', size = 'medium', variant = 'primary', styles = {}, className = '', disabled = false, bgColor = '', thumbColor = '', withShadow = false, shape = 'rounded', } = props;
    let _style = {};
    let _switcherButtonStyle = {};
    const sizeProps = (0, utils_1.getSwitcherSizeProps)(size);
    const backgroundStyle = { backgroundColor: (0, utils_1.getVariantColor)(variant) };
    if (size)
        _style = Object.assign(Object.assign({}, _style), sizeProps);
    if (variant && checked)
        _style = Object.assign(Object.assign({}, _style), backgroundStyle);
    if (variant && withShadow)
        _style = Object.assign(Object.assign({}, _style), (0, utils_1.getShadowProps)(variant || 'primary'));
    if (shape) {
        _style = Object.assign(Object.assign({}, _style), (0, utils_1.getSwitcherShapeProps)(shape, sizeProps.height));
        _switcherButtonStyle = Object.assign(Object.assign({}, _switcherButtonStyle), (0, utils_1.getSwitcherShapeProps)(shape, sizeProps.height));
    }
    if (styles)
        _style = Object.assign(Object.assign({}, _style), styles);
    if (disabled) {
        _style = Object.assign(Object.assign({}, _style), {
            pointerEvents: 'none',
            cursor: 'pointer',
            opacity: 0.5,
        });
    }
    const handleClick = (event) => {
        event.preventDefault();
        if (!disabled)
            setChecked(!checked);
    };
    return (react_1.default.createElement(StyledSwitcher_1.default, { "data-testid": "switcher", className: className, onClick: handleClick, disabled: disabled },
        react_1.default.createElement("input", { type: "checkbox", "true-value": "true", value: checked ? 'true' : 'false', disabled: disabled }),
        react_1.default.createElement(StyledSwitcherThumb_1.default, { "data-testid": "switcher-thumb-wrapper", style: _style, checked: checked, bgColor: bgColor, thumbColor: thumbColor },
            react_1.default.createElement("span", { style: _switcherButtonStyle, "data-testid": "switcher-thumb" })),
        react_1.default.createElement(StyledSwitcherLabel_1.default, null, text)));
};
exports.default = Switcher;
//# sourceMappingURL=switcher.js.map