import React from 'react';
import * as Icons from 'react-icons/fa';
export const getIcon = (iconName) => {
    const Icon = Icons[iconName];
    return (React.createElement(React.Fragment, null,
        React.createElement(Icon, null)));
};
export const getAllIcons = () => {
    const icons = Object.keys(Icons);
    return icons;
};
//# sourceMappingURL=icons.js.map