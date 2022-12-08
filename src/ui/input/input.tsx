import React from "react";
import { InputProps } from "../../domain/types";
import StyledInput from "./StyledInput";


const Input: React.FC<InputProps> = () => {
    return (
        <StyledInput data-testid="input" />
    )
}

export default Input