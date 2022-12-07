import { SizesTypes } from './types';
import { ButtonTypes } from './types';
export declare const getSizeProps: (size: SizesTypes) => {
    fontSize: string;
    padding: string;
};
export declare const getVariantProps: (variant: ButtonTypes) => {
    backgroundColor: string;
    textColor: string;
} | {
    backgroundColor?: undefined;
    textColor?: undefined;
};
export declare const getShadowProps: (variant: ButtonTypes) => {
    boxShadow: string;
} | {
    boxShadow?: undefined;
};
export declare const getHoverProps: (variant: ButtonTypes) => {
    "&:hover": {
        backgroundColor: string;
    };
    backgroundColor?: undefined;
} | {
    backgroundColor: string;
    "&:hover"?: undefined;
} | {
    "&:hover"?: undefined;
    backgroundColor?: undefined;
};
