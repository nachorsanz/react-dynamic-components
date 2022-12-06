

import React from 'react'


const  SizesTypes = ["small" , "medium" , "large"] as const
export type SizesTypes = typeof SizesTypes[number]

const  ButtonTypes = ["primary" , "secondary" , "tertiary" , "danger" , "success" , "warning" , "info" , "light" , "dark" , "link" , null] as const

export type ButtonTypes = typeof ButtonTypes[number]


export interface ButtonProps extends
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  size: SizesTypes
  onClick: () => void
  variant: ButtonTypes
  disabled?: boolean
  option: 'button' | 'submit' | 'reset'
  styles?: React.CSSProperties
  bgColor?: string 
  textColor?: string 
  text?: string
  icon?: string |null
  iconPosition?: 'left' | 'right' | "none"
  className?: string
  children?: React.ReactNode
    


}