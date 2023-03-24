import React from 'react';
declare const SizesTypes: readonly ["small", "medium", "large"];
export type SizesTypes = (typeof SizesTypes)[number];
declare const ButtonTypes: readonly ["primary", "secondary", "tertiary", "danger", "success", "warning", "info", "light", "dark", "link", null];
export type ButtonTypes = (typeof ButtonTypes)[number];
declare const VariantColors: readonly ["primary", "secondary", "tertiary", "danger", "success", "warning", "info", "light", "dark", null];
export type VariantColors = (typeof VariantColors)[number];
declare const VariantColorTypes: readonly ["light", "dark", null];
export type VariantColorTypes = (typeof VariantColorTypes)[number];
declare const OptionsType: readonly ["button", "submit", "reset"];
export type OptionsType = (typeof OptionsType)[number];
declare const IconPosition: readonly ["left", "right", "none"];
export type IconPosition = (typeof IconPosition)[number];
export type SelectContent = {
    key: string;
    value: string;
};
declare const SwitcherTypes: readonly ["primary", "secondary", "tertiary", "danger", "success", "warning", "info", "light", "dark", null];
export type SwitcherTypes = (typeof SwitcherTypes)[number];
export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    size: SizesTypes;
    onClick: () => void;
    variant: ButtonTypes;
    withShadow?: boolean;
    disabled?: boolean;
    hover?: boolean;
    option: OptionsType;
    styles?: React.CSSProperties;
    bgColor?: string;
    textColor?: string;
    text?: string;
    faIcon?: string | null;
    colorIcon?: string | null;
    iconPosition?: IconPosition;
    className?: string;
    children?: React.ReactNode;
}
export interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    placeholder?: string;
    type?: string;
    name?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    styles?: React.CSSProperties;
    className?: string;
    children?: React.ReactNode;
    id?: string;
    withShadow?: boolean;
    disabled?: boolean;
    hover?: boolean;
}
export interface IconProps {
    faIcon?: string;
    fcIcon?: string;
    color?: string;
    size?: string;
    styles?: React.CSSProperties;
    className?: string;
    children?: React.ReactNode;
}
export interface SelectProps {
    selectContent: SelectContent[];
    className?: string;
    styles?: React.CSSProperties;
    selectPlaceHolder: string;
    shouldHaveValue?: boolean;
    textColor: string;
    backgroundColor: string;
    itemListHoverColor: string;
    setValue(value: string): void;
    id?: string;
}
export interface SwitcherProps {
    value?: string | number | boolean | null;
    size: SizesTypes;
    variant: SwitcherTypes;
    withShadow?: boolean;
    disabled?: boolean;
    styles?: React.CSSProperties;
    bgColor?: string;
    thumbColor?: string;
    text?: string;
    className?: string;
    children?: React.ReactNode;
}
export {};
