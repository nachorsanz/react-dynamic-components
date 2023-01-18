import styled from 'styled-components';
const StyledSwitcher = styled.label `
    font-size: 15px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    position: relative;
    ${(props) => props.disabled &&
    `
      &{
        pointer-events: none;
        cursor: default;
        opacity: 0.5;
      }`};

    input {
        position: absolute;
        left: 0;
        opacity: 0;
        outline: none;
        z-index: -1;
    }
`;
export default StyledSwitcher;
//# sourceMappingURL=StyledSwitcher.js.map