import React from 'react'
import StyledButton from './StyledButton'
import { ButtonProps } from './types';
import { getSizeProps, getVariantProps } from './utils';


 const ReactDynamicButtons: React.FC<ButtonProps> = ({ text, size = "medium", styles = null, onClick, disabled = false, type, bgColor, textColor, variant = "primary" }) => {

  let _style: React.CSSProperties = {};

  if (size){
    _style = { ..._style, ...getSizeProps(size) }
  }

  if(variant) {
    _style = { ..._style, ...getVariantProps(variant) }
  }
 
   if(styles){
      _style = { ..._style, ...styles }
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