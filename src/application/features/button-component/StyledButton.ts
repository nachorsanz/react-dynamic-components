import styled from 'styled-components'
import { getHoverProps, getVariantProps } from '../../utils/utils'

const StyledButton = styled.button`
    font-size: 15px;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: space-evenly;
    font-weight: 500;
    padding: 0.8rem 2rem;
    border: 0px;
    ${(props) =>
        props.textColor &&
        `& {
    color: ${props.textColor};
  }`};
    ${(props) =>
        props.bgColor &&
        `& {
    background-color: ${props.bgColor};
  }`};

    ${(props) =>
        props.hover &&
        `
        background-color: ${getVariantProps(props.hover).backgroundColor};
        color: ${getVariantProps(props.hover).textColor};
        border-radius: ${getVariantProps(props.hover).borderRadius};
        &:hover {
          color: #fff;
          background-color: ${getHoverProps(props.hover).backgroundColor};
       
  }`};
`

export default StyledButton
