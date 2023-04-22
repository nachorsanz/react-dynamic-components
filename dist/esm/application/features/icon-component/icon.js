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
import { getColorIcon, getFAIcon } from '../../../domain/services/icons';
const Icon = (_a) => {
    var props = __rest(_a, []);
    const { faIcon, fcIcon, color, size, styles, className } = props;
    if (faIcon && fcIcon)
        throw new Error("You can't use both faIcon and fcIcon props at the same time");
    return (React.createElement("div", { "data-testid": "icon", className: className, style: Object.assign(Object.assign({}, styles), { color, fontSize: size }) },
        faIcon && getFAIcon(faIcon),
        fcIcon && getColorIcon(fcIcon)));
};
export default Icon;
//# sourceMappingURL=icon.js.map