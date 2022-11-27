import styled from "styled-components";

const StyledButton = styled.button`
  font-size: 15px;
  font-weight: 500;
  border-radius: 4px;
  text-align: center;
  padding: 0.8rem 2rem;
  border: 0px;
  ${(props) =>
    props.textColor &&
    `& {
    color: ${props.color};
  }`};
  ${(props) =>
    props.bgColor &&
    `& {
    background-color: ${props.bgColor};
  }`};
  ${(props) =>
    props.border &&
    `&::after {
    border: ${props.border};
  }
`};
 
`;

export default StyledButton;
