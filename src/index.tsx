import React from 'react'
import StyledButton from './StyledButton'

export interface ButtonProps extends
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  size: 'small' | 'medium' | 'large'
  onClick?: () => void
  disabled?: boolean
  type: 'button' | 'submit' | 'reset'
  styles?: React.CSSProperties
  border?: string
  bgColor?: string 
  textColor?: string  

}

export const ReactDynamicButtons: React.FC<ButtonProps> = ({ children, size, styles, onClick, disabled = false, type, bgColor, border, textColor }) => {
 


  const _style: React.CSSProperties = styles || {};

  switch(size) {
    case 'small':
        _style.fontSize = '12px';
        _style.padding = '5px 10px';

      break;
    case 'medium':
        _style.fontSize = '14px';
        _style.padding = '10px 15px';
      break;
    case 'large':
        _style.fontSize = '16px';
        _style.padding = '15px 20px';
      break;
  }

  _style.padding = '5px 10px';

  return (
    <StyledButton 
    style={_style}  
    onClick={onClick} 
    type={type} 
    disabled={disabled} 
    bgColor={bgColor}
    border={border}
    textColor={textColor}
    >{children}
    </StyledButton>
  )
}