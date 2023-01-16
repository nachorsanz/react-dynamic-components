import styled from 'styled-components'

const StyledSelectWrapper = styled.div`
    max-width: 18rem;
    background-color: ${props => props.selectContent && "red"};
`
export default StyledSelectWrapper
