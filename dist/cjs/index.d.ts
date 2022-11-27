import React from 'react';
export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    size: 'small' | 'medium' | 'large';
    onClick: () => void;
    disabled?: boolean;
    type: 'button' | 'submit' | 'reset';
    styles?: React.CSSProperties;
    border?: string;
    bgColor?: string;
    textColor?: string;
}
declare const ReactDynamicButtons: React.FC<ButtonProps>;
export default ReactDynamicButtons;
