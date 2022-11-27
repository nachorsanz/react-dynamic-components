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
exports.ReactDynamicButtons = void 0;
const react_1 = __importDefault(require("react"));
const ReactDynamicButtons = (_a) => {
    var { variant = 'primary' } = _a, props = __rest(_a, ["variant"]);
    const { children, style } = props;
    const _style = style || {};
    switch (variant) {
        case 'primary':
            _style.backgroundColor = "#006E7F";
            _style.color = '#fff';
            break;
        case 'secondary':
            _style.backgroundColor = "#F8CB2E";
            _style.color = '#000';
            break;
        case 'danger':
            _style.backgroundColor = "#B22727";
            _style.color = '#fff';
            break;
    }
    _style.padding = '5px 10px';
    return (react_1.default.createElement("button", Object.assign({ style: _style }, props), children));
};
exports.ReactDynamicButtons = ReactDynamicButtons;
//# sourceMappingURL=index.js.map