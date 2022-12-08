import React from 'react'
import { getColorIcon, getIcon } from '../../common/icons'
import StyledButton from './StyledButton'
import { ButtonProps } from '../../domain/types'
import {
    getShadowProps,
    getSizeProps,
    getVariantProps,
} from '../../domain/utils'

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
        icon = null,
        colorIcon = null,
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

    if (icon && colorIcon)
        throw new Error(
            "You can't use both icon and colorIcon props at the same time"
        )

    return (
        <StyledButton
            data-testid="button"
            className={className}
            style={_style}
            onClick={onClick}
            disabled={disabled}
            bgColor={bgColor}
            textColor={textColor}
            hover={hover ? variant : null}
        >
            {icon && !colorIcon && iconPosition === 'left' && getIcon(icon)}
            {colorIcon &&
                !icon &&
                iconPosition === 'left' &&
                getColorIcon(colorIcon)}
            {text}
            {icon &&
                !colorIcon &&
                iconPosition === 'right' &&
                getIcon(icon)}
            {colorIcon &&
                !icon &&
                iconPosition === 'right' &&
                getColorIcon(colorIcon)}
        </StyledButton>
    )
}

export default ReactDynamicButtons
