import React from 'react'
import * as Icons from 'react-icons/fa'
import * as ColorIcons from 'react-icons/fc'

export const getIcon = (iconName: string) => {
    console.log('All', ColorIcons)
    const Icon = Icons[iconName]
    return (
        <>
            <Icon data-testid="button-icon" />
        </>
    )
}

export const getAllIcons = () => {
    const icons = Object.keys(Icons)
    return icons
}

export const getColorIcon = (iconName: string) => {
    const Icon = ColorIcons[iconName]
    return (
        <>
            <Icon data-testid="button-icon" />
        </>
    )
}

export const getAllColorIcons = () => {
    const icons = Object.keys(ColorIcons)
    return icons
}
