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
import { getIcon } from './icons';
import StyledButton from './StyledButton';
import { getShadowProps, getSizeProps, getVariantProps } from './utils';
const ReactDynamicButtons = (_a) => {
    var props = __rest(_a, []);
    const { text = 'Button', size = 'medium', variant = 'primary', styles = {}, className = '', onClick = () => { }, disabled = false, bgColor = '', textColor = '', icon = '', iconPosition = null, withShadow = false, } = props;
    let _style = {};
    if (size)
        _style = Object.assign(Object.assign({}, _style), getSizeProps(size));
    if (variant)
        _style = Object.assign(Object.assign({}, _style), getVariantProps(variant));
    if (variant && withShadow)
        _style = Object.assign(Object.assign({}, _style), getShadowProps(variant));
    if (styles)
        _style = Object.assign(Object.assign({}, _style), styles);
    return (React.createElement(StyledButton, { className: className, style: _style, onClick: onClick, disabled: disabled, bgColor: bgColor, textColor: textColor },
        icon && iconPosition === 'left' && getIcon(icon),
        " ",
        text,
        ' ',
        icon && iconPosition === 'right' && getIcon(icon)));
};
export default ReactDynamicButtons;
//# sourceMappingURL=index.js.map