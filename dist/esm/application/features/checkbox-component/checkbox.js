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
import React from "react";
import { StyledCheckbox, StyledLabel } from "./StyledLabel";
import { getCheckboxSizeProps, getShadowProps, getVariantColor } from "../../utils/utils";
const Checkbox = (_a) => {
    var props = __rest(_a, []);
    const { checked, onChange, label, variant, size, withShadow, className, styles, disabled, labelPosition = 'left' } = props;
    const handleOnChange = () => {
        onChange(!checked);
    };
    let _style = {};
    const backgroundStyle = { backgroundColor: getVariantColor(variant) };
    if (variant && checked)
        _style = Object.assign(Object.assign({}, _style), backgroundStyle);
    if (size) {
        _style = Object.assign(Object.assign({}, _style), getCheckboxSizeProps(size));
    }
    if (variant && withShadow) {
        _style = Object.assign(Object.assign({}, _style), getShadowProps(variant || "primary"));
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
    return (React.createElement(StyledLabel, null,
        label && labelPosition === 'right' && React.createElement("span", null, label),
        React.createElement(StyledCheckbox, { type: "checkbox", checked: checked, onChange: handleOnChange, className: className, style: _style }),
        label && labelPosition === 'left' && React.createElement("span", null, label)));
};
export default Checkbox;
//# sourceMappingURL=checkbox.js.map