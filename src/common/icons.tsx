import React from 'react'
import * as Icons from 'react-icons/fa'

export const getIcon = (iconName: string) => {
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
