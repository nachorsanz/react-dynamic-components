import React from "react";
import { CheckboxProps } from "../../../domain/models/types";
import { StyledCheckbox, StyledLabel } from "./StyledLabel";
import { getCheckboxSizeProps, getShadowProps, getVariantColor } from "../../utils/utils";


const Checkbox: React.FC<CheckboxProps> = ({ ...props }) => {
    const {checked,onChange,label, variant, size,withShadow,className,styles, disabled, labelPosition = 'left'} = props
 

  const handleOnChange = () => {
    onChange(!checked);
  };
  let _style: React.CSSProperties = {};




  const backgroundStyle = { backgroundColor: getVariantColor(variant) }

 

  if (variant && checked) _style = { ..._style, ...backgroundStyle }
  if (size) {
    _style = { ..._style, ...getCheckboxSizeProps(size) };
  }
  
  if (variant && withShadow) {
    _style = { ..._style, ...getShadowProps(variant || "primary") };
  }
  
  if (styles) {
    _style = { ..._style, ...styles };
  }
  
  if (disabled) {
    _style = {
      ..._style,
      ...{
        pointerEvents: "none",
        cursor: "pointer",
        opacity: 0.5,
      },
    };
  }



  return (
    <StyledLabel >
        {label && labelPosition === 'right' && <span>{label}</span>}
      <StyledCheckbox type="checkbox" checked={checked} onChange={handleOnChange} className={className} style={_style}  />
      {label && labelPosition === 'left' && <span>{label}</span>}
    </StyledLabel>
  );
};

export default Checkbox;
