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
import React, { useState } from 'react';
import StyledSwitcher from './StyledSwitcher';
import StyledSwitcherThumb from './StyledSwitcherThumb';
import StyledSwitcherLabel from './StyledSwitcherLabel';
import { getShadowProps, getSwitcherSizeProps, getVariantColor, } from '../../domain/utils';
const Switcher = (_a) => {
    var props = __rest(_a, []);
    const [checked, setChecked] = useState(false);
    const { text = '', size = 'medium', variant = 'primary', styles = {}, className = '', disabled = false, bgColor = '', thumbColor = '', withShadow = false, } = props;
    let _style = {};
    const backgroundStyle = { backgroundColor: getVariantColor(variant) };
    if (size)
        _style = Object.assign(Object.assign({}, _style), getSwitcherSizeProps(size));
    if (variant && checked)
        _style = Object.assign(Object.assign({}, _style), backgroundStyle);
    if (variant && withShadow)
        _style = Object.assign(Object.assign({}, _style), getShadowProps(variant || 'primary'));
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
    return (React.createElement(StyledSwitcher, { "data-testid": "switcher", className: className, onClick: handleClick, disabled: disabled },
        React.createElement("input", { type: "checkbox", "true-value": "true", value: checked ? 'true' : 'false', disabled: disabled }),
        React.createElement(StyledSwitcherThumb, { "data-testid": "switcher-thumb-wrapper", style: _style, checked: checked, bgColor: bgColor, thumbColor: thumbColor },
            React.createElement("span", { "data-testid": "switcher-thumb" })),
        React.createElement(StyledSwitcherLabel, null, text)));
};
export default Switcher;
//# sourceMappingURL=switcher.js.map