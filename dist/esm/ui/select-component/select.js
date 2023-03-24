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
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import StyledSelect from './StyledSelect';
import StyledSelectList from './StyledSelectList';
import StyledSelectItem from './StyledSelectItem';
import StyledSelectWrapper from './StyledSelectWrapper';
const SelectComponent = (_a) => {
    var props = __rest(_a, []);
    const { selectContent, className, styles, selectPlaceHolder, id, shouldHaveValue, setValue, } = props;
    const [showDropdown, setShowDropdown] = useState(false);
    const [currentSelectValue, setCurrentSelectValue] = useState('');
    const handleDropdown = () => {
        setShowDropdown(!showDropdown);
    };
    const handleSelect = (value) => {
        setCurrentSelectValue(value);
        setShowDropdown(!showDropdown);
        setValue && setValue(value);
    };
    return (React.createElement(StyledSelectWrapper, { style: styles, className: className, id: id, "data-testid": "select" },
        React.createElement(StyledSelect, { onClick: handleDropdown, textColor: props.textColor, backgroundColor: props.backgroundColor },
            React.createElement("span", { "data-testid": "select-placeholder" }, currentSelectValue === ''
                ? selectPlaceHolder
                : currentSelectValue),
            showDropdown ? React.createElement(FaArrowUp, null) : React.createElement(FaArrowDown, null)),
        showDropdown && (React.createElement(StyledSelectList, { "data-testid": "select-list-content", textColor: props.textColor, backgroundColor: props.backgroundColor },
            !shouldHaveValue && (React.createElement(StyledSelectItem, { "data-testid": "select-item", itemListHoverColor: props.itemListHoverColor, onClick: () => {
                    setCurrentSelectValue('');
                    setShowDropdown(false);
                } }, selectPlaceHolder)),
            selectContent.map((content) => (React.createElement(StyledSelectItem, { "data-testid": "select-item", itemListHoverColor: props.itemListHoverColor, key: content.key, onClick: () => handleSelect(content.value) },
                React.createElement("span", { key: content.key }, content.key))))))));
};
export default SelectComponent;
//# sourceMappingURL=select.js.map