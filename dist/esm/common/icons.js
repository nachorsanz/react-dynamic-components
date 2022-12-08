import React from 'react';
import * as Icons from 'react-icons/fa';
import * as ColorIcons from 'react-icons/fc';
export const getFAIcon = (iconName) => {
    const Icon = Icons[iconName];
    return (React.createElement(React.Fragment, null,
        React.createElement(Icon, { "data-testid": "button-icon" })));
};
export const getAllFAIcons = () => {
    const icons = Object.keys(Icons);
    return icons;
};
export const getColorIcon = (iconName) => {
    const Icon = ColorIcons[iconName];
    return (React.createElement(React.Fragment, null,
        React.createElement(Icon, { "data-testid": "button-icon" })));
};
export const getAllColorIcons = () => {
    const icons = Object.keys(ColorIcons);
    return icons;
};
//# sourceMappingURL=icons.js.map