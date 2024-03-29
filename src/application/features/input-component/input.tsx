import React from 'react'
import { InputProps } from '../../../domain/models/types'
import StyledInput from './StyledInput'

const Input: React.FC<InputProps> = ({ ...props }) => {
    const {
        placeholder = 'Placeholder',
        styles = {},
        className = '',
        onChange = () => {},
        disabled = false,
        value = '',
        type = 'text',
        name = '',
        id = '',
    } = props


    return (
        <StyledInput
            data-testid="input"
            className={className}
            style={styles}
            onChange={onChange}
            disabled={disabled}
            value={value}
            type={type}
            name={name}
            id={id}
            placeholder={placeholder}
      
        />
    )
}

export default Input
