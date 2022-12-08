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
import React from 'react';
import { getColorIcon, getFAIcon } from './icons';
import StyledButton from './StyledButton';
import { getShadowProps, getSizeProps, getVariantProps, } from './domain/utils';
const ReactDynamicButtons = (_a) => {
    var props = __rest(_a, []);
    const { text = 'Button', size = 'medium', variant = 'primary', styles = {}, className = '', onClick = () => { }, disabled = false, bgColor = '', textColor = '', faIcon = null, colorIcon = null, iconPosition = null, withShadow = false, hover = false, } = props;
    let _style = {};
    if (size)
        _style = Object.assign(Object.assign({}, _style), getSizeProps(size));
    if (variant && !hover)
        _style = Object.assign(Object.assign({}, _style), getVariantProps(variant));
    if (variant && withShadow)
        _style = Object.assign(Object.assign({}, _style), getShadowProps(variant));
    if (styles)
        _style = Object.assign(Object.assign({}, _style), styles);
    if (faIcon && colorIcon)
        throw new Error("You can't use both icon and colorIcon props at the same time");
    return (React.createElement(StyledButton, { "data-testid": "button", className: className, style: _style, onClick: onClick, disabled: disabled, bgColor: bgColor, textColor: textColor, hover: hover ? variant : null },
        faIcon && !colorIcon && iconPosition === 'left' && getFAIcon(faIcon),
        colorIcon &&
            !faIcon &&
            iconPosition === 'left' &&
            getColorIcon(colorIcon),
        text,
        faIcon &&
            !colorIcon &&
            iconPosition === 'right' &&
            getFAIcon(faIcon),
        colorIcon &&
            !faIcon &&
            iconPosition === 'right' &&
            getColorIcon(colorIcon)));
};
export default ReactDynamicButtons;
//# sourceMappingURL=button.js.map