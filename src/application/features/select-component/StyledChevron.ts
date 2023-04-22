import styled from 'styled-components'

const StyledChevron = styled.div`
    & > svg {
        transition: 0.1s ease;
        transform: rotate(
            ${(props) => (props.drowpdownActive ? '90deg' : '0deg')}
        );
    }
`
export default StyledChevron
