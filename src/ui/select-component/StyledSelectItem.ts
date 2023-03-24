import styled from 'styled-components'

const StyledSelectItem = styled.div`
    padding: 1rem;
    cursor: pointer;
    &:hover {
        background-color: ${(props) => props.itemListHoverColor};
    }
    span {
        display: block;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`
export default StyledSelectItem
