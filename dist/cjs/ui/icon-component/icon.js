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
const icons_1 = require("../../domain/icons");
const Icon = (_a) => {
    var props = __rest(_a, []);
    const { faIcon, fcIcon, color, size, styles, className } = props;
    if (faIcon && fcIcon)
        throw new Error("You can't use both faIcon and fcIcon props at the same time");
    return (react_1.default.createElement("div", { "data-testid": "icon", className: className, style: Object.assign(Object.assign({}, styles), { color, fontSize: size }) },
        faIcon && (0, icons_1.getFAIcon)(faIcon),
        fcIcon && (0, icons_1.getColorIcon)(fcIcon)));
};
exports.default = Icon;
//# sourceMappingURL=icon.js.map