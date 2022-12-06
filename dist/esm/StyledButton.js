import styled from 'styled-components';
const StyledButton = styled.button `
    font-size: 15px;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: space-evenly;
    font-weight: 500;
    border-radius: 4px;
    padding: 0.8rem 2rem;
    border: 0px;
    ${(props) => props.textColor &&
    `& {
    color: ${props.textColor};
  }`};
    ${(props) => props.bgColor &&
    `& {
    background-color: ${props.bgColor};
  }`};
`;
export default StyledButton;
//# sourceMappingURL=StyledButton.js.map