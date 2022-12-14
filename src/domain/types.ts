import React from 'react'

// types
const SizesTypes = ['small', 'medium', 'large'] as const
export type SizesTypes = typeof SizesTypes[number]

const ButtonTypes = [
    'primary',
    'secondary',
    'tertiary',
    'danger',
    'success',
    'warning',
    'info',
    'light',
    'dark',
    'link',
    null,
] as const
export type ButtonTypes = typeof ButtonTypes[number]

const OptionsType = ['button', 'submit', 'reset'] as const
export type OptionsType = typeof OptionsType[number]

const IconPosition = ['left', 'right', 'none'] as const
export type IconPosition = typeof IconPosition[number]

// interface
export interface ButtonProps
    extends React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    size: SizesTypes
    onClick: () => void
    variant: ButtonTypes
    withShadow?: boolean
    disabled?: boolean
    hover?: boolean
    option: OptionsType
    styles?: React.CSSProperties
    bgColor?: string
    textColor?: string
    text?: string
    faIcon?: string | null
    colorIcon?: string | null
    iconPosition?: IconPosition
    className?: string
    children?: React.ReactNode
}

export interface InputProps
    extends React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
    placeholder?: string
    type?: string
    name?: string
    value?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    styles?: React.CSSProperties
    className?: string
    children?: React.ReactNode
    id?: string
    withShadow?: boolean
    disabled?: boolean
    hover?: boolean
}

export interface IconProps {
    faIcon?: string
    fcIcon?: string
    color?: string
    size?: string
    styles?: React.CSSProperties
    className?: string
    children?: React.ReactNode
}
