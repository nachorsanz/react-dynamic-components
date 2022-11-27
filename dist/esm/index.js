import React from 'react';
import StyledButton from './StyledButton';
const ReactDynamicButtons = ({ children, size, styles, onClick, disabled = false, type, bgColor, border, textColor }) => {
    const _style = styles || {};
    switch (size) {
        case 'small':
            _style.fontSize = '12px';
            _style.padding = '5px 10px';
            break;
        case 'medium':
            _style.fontSize = '14px';
            _style.padding = '10px 15px';
            break;
        case 'large':
            _style.fontSize = '16px';
            _style.padding = '15px 20px';
            break;
    }
    _style.padding = '5px 10px';
    return (React.createElement(StyledButton, { style: _style, onClick: onClick, type: type, disabled: disabled, bgColor: bgColor, border: border, textColor: textColor }, children));
};
export default ReactDynamicButtons;
//# sourceMappingURL=index.js.map