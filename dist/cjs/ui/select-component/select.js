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
const fa_1 = require("react-icons/fa");
const StyledSelect_1 = __importDefault(require("./StyledSelect"));
const StyledSelectList_1 = __importDefault(require("./StyledSelectList"));
const StyledSelectItem_1 = __importDefault(require("./StyledSelectItem"));
const StyledSelectWrapper_1 = __importDefault(require("./StyledSelectWrapper"));
const SelectComponent = (_a) => {
    var props = __rest(_a, []);
    const { selectContent, className, styles, selectPlaceHolder, id, shouldHaveValue, setValue, } = props;
    const [showDropdown, setShowDropdown] = (0, react_1.useState)(false);
    const [currentSelectValue, setCurrentSelectValue] = (0, react_1.useState)('');
    const handleDropdown = () => {
        setShowDropdown(!showDropdown);
    };
    const handleSelect = (value) => {
        setCurrentSelectValue(value);
        setShowDropdown(!showDropdown);
        setValue && setValue(value);
    };
    return (react_1.default.createElement(StyledSelectWrapper_1.default, { style: styles, className: className, id: id, "data-testid": "select" },
        react_1.default.createElement(StyledSelect_1.default, { onClick: handleDropdown, textColor: props.textColor, backgroundColor: props.backgroundColor },
            react_1.default.createElement("span", { "data-testid": "select-placeholder" }, currentSelectValue === ''
                ? selectPlaceHolder
                : currentSelectValue),
            showDropdown ? react_1.default.createElement(fa_1.FaArrowUp, null) : react_1.default.createElement(fa_1.FaArrowDown, null)),
        showDropdown && (react_1.default.createElement(StyledSelectList_1.default, { "data-testid": "select-list-content", textColor: props.textColor, backgroundColor: props.backgroundColor },
            !shouldHaveValue && (react_1.default.createElement(StyledSelectItem_1.default, { "data-testid": "select-item", itemListHoverColor: props.itemListHoverColor, onClick: () => {
                    setCurrentSelectValue('');
                    setShowDropdown(false);
                } }, selectPlaceHolder)),
            selectContent.map((content) => (react_1.default.createElement(StyledSelectItem_1.default, { "data-testid": "select-item", itemListHoverColor: props.itemListHoverColor, key: content.key, onClick: () => handleSelect(content.value) },
                react_1.default.createElement("span", { key: content.key }, content.key))))))));
};
exports.default = SelectComponent;
//# sourceMappingURL=select.js.map