import styled from 'styled-components'

const StyledSelectItem = styled.div`
    padding: 1rem;
    cursor: pointer;
    &:hover {
        background-color: #d6d6d6;
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
