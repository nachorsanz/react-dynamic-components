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
const StyledLabel_1 = require("./StyledLabel");
const utils_1 = require("../../utils/utils");
const Checkbox = (_a) => {
    var props = __rest(_a, []);
    const { checked, onChange, label, variant, size, withShadow, className, styles, disabled, labelPosition = 'left' } = props;
    const handleOnChange = () => {
        onChange(!checked);
    };
    let _style = {};
    const backgroundStyle = { backgroundColor: (0, utils_1.getVariantColor)(variant) };
    if (variant && checked)
        _style = Object.assign(Object.assign({}, _style), backgroundStyle);
    if (size) {
        _style = Object.assign(Object.assign({}, _style), (0, utils_1.getCheckboxSizeProps)(size));
    }
    if (variant && withShadow) {
        _style = Object.assign(Object.assign({}, _style), (0, utils_1.getShadowProps)(variant || "primary"));
    }
    if (styles) {
        _style = Object.assign(Object.assign({}, _style), styles);
    }
    if (disabled) {
        _style = Object.assign(Object.assign({}, _style), {
            pointerEvents: "none",
            cursor: "pointer",
            opacity: 0.5,
        });
    }
    return (react_1.default.createElement(StyledLabel_1.StyledLabel, null,
        label && labelPosition === 'right' && react_1.default.createElement("span", null, label),
        react_1.default.createElement(StyledLabel_1.StyledCheckbox, { type: "checkbox", checked: checked, onChange: handleOnChange, className: className, style: _style }),
        label && labelPosition === 'left' && react_1.default.createElement("span", null, label)));
};
exports.default = Checkbox;
//# sourceMappingURL=checkbox.js.map