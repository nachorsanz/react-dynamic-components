import React from 'react'
import { InputProps } from '../../domain/types'
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
        withShadow = false,
        hover = false,
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
            withShadow={withShadow}
            hover={hover}
        />
    )
}

export default Input
