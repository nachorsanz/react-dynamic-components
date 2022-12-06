import React from 'react'
import { getIcon } from './icons';
import StyledButton from './StyledButton'
import { ButtonProps } from './types';
import { getSizeProps, getVariantProps } from './utils';


 const ReactDynamicButtons: React.FC<ButtonProps> = ({ ...props }) => {
  const { text, size, variant, styles, className, onClick, disabled, bgColor, textColor, icon, iconPosition } = props;
  

  let _style: React.CSSProperties = {}

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
    className={className}
    style={_style}  
    onClick={onClick} 
    variant={variant} 
    disabled={disabled} 
    bgColor={bgColor}
    textColor={textColor}
    >{icon && iconPosition === "left" && getIcon(icon)} {text} {icon && iconPosition === "right" && getIcon(icon)}
    </StyledButton>
  )
}

export default ReactDynamicButtons