import styled from 'styled-components';
const StyledSelect = styled.div `
    padding: 1.5rem;
    border-radius: 4px;
    box-shadow: 0 0.5em 1em 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;
    background-color: ${(props) => props.backgroundColor};
    color: ${(props) => props.textColor};
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
    span {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        width: 100%;
    }
`;
export default StyledSelect;
//# sourceMappingURL=StyledSelect.js.map