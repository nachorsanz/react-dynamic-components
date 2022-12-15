import React from 'react';
import styled from 'styled-components';
const StyledCard = styled.div `
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    width: 300px;
`;
const Card = ({ children, styles }) => {
    return (React.createElement(StyledCard, { style: styles }, children));
};
export default Card;
//# sourceMappingURL=card-component.js.map