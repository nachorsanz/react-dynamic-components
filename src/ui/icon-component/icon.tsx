import React from 'react'
import { getColorIcon, getFAIcon } from '../../domain/icons'
import { IconProps } from '../../domain/types'

const Icon: React.FC<IconProps> = ({ ...props }) => {
    const { faIcon, fcIcon, color, size, styles, className } = props

    if (faIcon && fcIcon)
        throw new Error(
            "You can't use both faIcon and fcIcon props at the same time"
        )

    return (
        <div data-testid="icon" className={className} style={{ ...styles, color, fontSize: size }}>
            {faIcon && getFAIcon(faIcon)}
            {fcIcon && getColorIcon(fcIcon)}
        </div>
    )
}

export default Icon
