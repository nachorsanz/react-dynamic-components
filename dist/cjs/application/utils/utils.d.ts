import { ShapeTypes, SizesTypes } from '../../domain/models/types';
import { ButtonTypes } from '../../domain/models/types';
import { VariantColors } from '../../domain/models/types';
import { VariantColorTypes } from '../../domain/models/types';
export declare const getSizeProps: (size: SizesTypes) => {
    fontSize: string;
    padding: string;
};
export declare const getSwitcherSizeProps: (size: SizesTypes) => {
    height: string;
    width: string;
    padding: string;
};
export declare const getVariantColor: (variant: VariantColors, type?: VariantColorTypes) => "" | "#0069d9" | "#007bff" | "#c6c6c6" | "#d6cdcd" | "#218838" | "#28a745" | "#c82333" | "#dc3545" | "#e0a800" | "#ffc107" | "#138496" | "#17a2b8" | "#e2e6ea" | "#f8f9fa" | "#1d2124" | "#343a40";
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
export declare const getSwitcherShapeProps: (shape: ShapeTypes, roundedRadius: string) => {
    borderRadius: string;
};
export declare const getButtonAnimation: (variant: ButtonTypes) => void;
