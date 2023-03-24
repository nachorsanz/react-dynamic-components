import React, { useState } from 'react'
import StyledSwitcher from './StyledSwitcher'
import StyledSwitcherThumb from './StyledSwitcherThumb'
import StyledSwitcherLabel from './StyledSwitcherLabel'
import { SwitcherProps } from '../../domain/types'
import {
    getShadowProps,
    getSwitcherSizeProps,
    getVariantColor,
} from '../../domain/utils'

const Switcher: React.FC<SwitcherProps> = ({ ...props }) => {
    const [checked, setChecked] = useState<boolean | null>(false)

    const {
        text = '',
        size = 'medium',
        variant = 'primary',
        styles = {},
        className = '',
        disabled = false,
        bgColor = '',
        thumbColor = '',
        withShadow = false,
    } = props

    let _style: React.CSSProperties = {}

    const backgroundStyle = { backgroundColor: getVariantColor(variant) }

    if (size) _style = { ..._style, ...getSwitcherSizeProps(size) }

    if (variant && checked) _style = { ..._style, ...backgroundStyle }

    if (variant && withShadow)
        _style = { ..._style, ...getShadowProps(variant || 'primary') }

    if (styles) _style = { ..._style, ...styles }

    if (disabled) {
        _style = {
            ..._style,
            ...{
                pointerEvents: 'none',
                cursor: 'pointer',
                opacity: 0.5,
            },
        }
    }

    const handleClick = (event: React.SyntheticEvent) => {
        event.preventDefault()
        if (!disabled) setChecked(!checked)
    }

    return (
        <StyledSwitcher
            data-testid="switcher"
            className={className}
            onClick={handleClick}
            disabled={disabled}
        >
            <input
                type="checkbox"
                true-value="true"
                value={checked ? 'true' : 'false'}
                disabled={disabled}
            />

            <StyledSwitcherThumb
                data-testid="switcher-thumb-wrapper"
                style={_style}
                checked={checked}
                bgColor={bgColor}
                thumbColor={thumbColor}
            >
                <span data-testid="switcher-thumb"></span>
            </StyledSwitcherThumb>

            <StyledSwitcherLabel>{text}</StyledSwitcherLabel>
        </StyledSwitcher>
    )
}

export default Switcher
