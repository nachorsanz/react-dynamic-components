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
import StyledInput from './StyledInput';
const Input = (_a) => {
    var props = __rest(_a, []);
    const { placeholder = 'Placeholder', styles = {}, className = '', onChange = () => { }, disabled = false, value = '', type = 'text', name = '', id = '', } = props;
    return (React.createElement(StyledInput, { "data-testid": "input", className: className, style: styles, onChange: onChange, disabled: disabled, value: value, type: type, name: name, id: id, placeholder: placeholder }));
};
export default Input;
//# sourceMappingURL=input.js.map