import React from 'react'


const  SizesTypes = ["small" , "medium" , "large"] as const
export type SizesTypes = typeof SizesTypes[number]

const  ButtonTypes = ["primary" , "secondary" , "tertiary" , "danger" , "success" , "warning" , "info" , "light" , "dark" , "link" , null] as const
export type ButtonTypes = typeof ButtonTypes[number]

const OptionsType = ["button" , "submit" , "reset"] as const
export type OptionsType = typeof OptionsType[number]

const IconPosition = ["left" , "right" , "none"] as const
export type IconPosition = typeof IconPosition[number]


export interface ButtonProps extends
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  size: SizesTypes
  onClick: () => void
  variant: ButtonTypes
  disabled?: boolean
  option: OptionsType
  styles?: React.CSSProperties
  bgColor?: string 
  textColor?: string 
  text?: string
  icon?: string |null
  iconPosition?: IconPosition
  className?: string
  children?: React.ReactNode
}