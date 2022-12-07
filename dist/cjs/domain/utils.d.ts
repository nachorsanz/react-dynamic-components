import { SizesTypes } from './types';
import { ButtonTypes } from './types';
export declare const getSizeProps: (size: SizesTypes) => {
    fontSize: string;
    padding: string;
};
export declare const getVariantProps: (variant: ButtonTypes) => {
    backgroundColor: string;
    textColor: string;
    borderRadius: string;
} | {
    backgroundColor?: undefined;
    textColor?: undefined;
    borderRadius?: undefined;
};
export declare const getShadowProps: (variant: ButtonTypes) => {
    boxShadow: string;
} | {
    boxShadow?: undefined;
};
export declare const getHoverProps: (variant: ButtonTypes) => {
    backgroundColor: string;
} | {
    backgroundColor?: undefined;
};
