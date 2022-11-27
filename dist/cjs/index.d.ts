import React from 'react';
export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'danger';
}
export declare const ReactDynamicButtons: React.FC<ButtonProps>;
