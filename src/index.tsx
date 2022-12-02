import React from 'react'
import StyledButton from './StyledButton'
import { ButtonProps } from './types';
import { getSizeProps, getVariantProps } from './utils';


 const ReactDynamicButtons: React.FC<ButtonProps> = ({ text, size = "medium", styles, onClick, disabled = false, type, bgColor, textColor, variant = "primary" }) => {

  let _style: React.CSSProperties = styles || {};

  if (size){
    _style = { ..._style, ...getSizeProps(size) }
  }

  if(variant) {
    _style = { ..._style, ...getVariantProps(variant) }
  }
 

  return (
    <StyledButton 
    style={_style}  
    onClick={onClick} 
    type={type} 
    disabled={disabled} 
    bgColor={bgColor}
    textColor={textColor}
    >{text}
    </StyledButton>
  )
}

export default ReactDynamicButtons