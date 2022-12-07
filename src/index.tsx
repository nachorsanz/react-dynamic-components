import React from 'react'
import { getIcon } from './icons'
import StyledButton from './StyledButton'
import { ButtonProps } from './types'
import {
    getShadowProps,
    getSizeProps,
    getVariantProps,
} from './utils'

const ReactDynamicButtons: React.FC<ButtonProps> = ({ ...props }) => {
    const {
        text = 'Button',
        size = 'medium',
        variant = 'primary',
        styles = {},
        className = '',
        onClick = () => {},
        disabled = false,
        bgColor = '',
        textColor = '',
        icon = '',
        iconPosition = null,
        withShadow = false,
        hover = false,
    } = props

    let _style: React.CSSProperties = {}

    if (size) _style = { ..._style, ...getSizeProps(size) }

    if (variant && !hover) _style = { ..._style, ...getVariantProps(variant) }

    if (variant && withShadow)
        _style = { ..._style, ...getShadowProps(variant) }

    if (styles) _style = { ..._style, ...styles }

    return (
        <StyledButton
            className={className}
            style={_style}
            onClick={onClick}
            disabled={disabled}
            bgColor={bgColor}
            textColor={textColor}
            hover={hover ? variant : null}
        >
            {icon && iconPosition === 'left' && getIcon(icon)} {text}{' '}
            {icon && iconPosition === 'right' && getIcon(icon)}
        </StyledButton>
    )
}

export default ReactDynamicButtons
