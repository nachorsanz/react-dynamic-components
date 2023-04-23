import styled from 'styled-components'

export const StyledLabel = styled.label`
  display: flex;
  align-items: center;
`;


interface StyledCheckboxProps {
    bgColor?: string;
    isCheck?: boolean;
  }
  
  export const StyledCheckbox = styled.input<StyledCheckboxProps>`
  cursor: pointer;

`;