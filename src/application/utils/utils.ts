import { ShapeTypes, SizesTypes } from '../../domain/models/types'
import { ButtonTypes } from '../../domain/models/types'
import { VariantColors } from '../../domain/models/types'
import { VariantColorTypes } from '../../domain/models/types'

export const getSizeProps = (size: SizesTypes) => {
    switch (size) {
        case 'small':
            return {
                fontSize: '12px',
                padding: '0.5rem 1rem',
            }
        case 'medium':
            return {
                fontSize: '15px',
                padding: '0.8rem 2rem',
            }
        case 'large':
            return {
                fontSize: '18px',
                padding: '1rem 2.5rem',
            }
    }
}

export const getSwitcherSizeProps = (size: SizesTypes) => {
    switch (size) {
        case 'small':
            return {
                height: '1rem',
                width: '2rem',
                padding: '0.175rem',
            }
        case 'medium':
            return {
                height: '1.25rem',
                width: '2.5rem',
                padding: '0.25rem',
            }
        case 'large':
            return {
                height: '1.5rem',
                width: '3rem',
                padding: '0.5rem',
            }
    }
}

export const getCheckboxSizeProps = (size: SizesTypes) => {
    switch (size) {
        case 'small':
            return {
                height: '1rem',
                width: '2rem',
                padding: '0.175rem',
            }
        case 'medium':
            return {
                height: '1.25rem',
                width: '2.5rem',
                padding: '0.25rem',
            }
        case 'large':
            return {
                height: '1.5rem',
                width: '3rem',
                padding: '0.5rem',
            }
    }
}

export const getVariantColor = (
    variant: VariantColors,
    type: VariantColorTypes = null
) => {
    switch (variant) {
        case 'primary':
            return type === 'dark' ? '#0069d9' : '#007bff'
        case 'secondary':
            return type === 'dark' ? '#c6c6c6' : '#d6cdcd'
        case 'tertiary':
            return type === 'dark' ? '#218838' : '#28a745'
        case 'danger':
            return type === 'dark' ? '#c82333' : '#dc3545'
        case 'success':
            return type === 'dark' ? '#218838' : '#28a745'
        case 'warning':
            return type === 'dark' ? '#e0a800' : '#ffc107'
        case 'info':
            return type === 'dark' ? '#138496' : '#17a2b8'
        case 'light':
            return type === 'dark' ? '#e2e6ea' : '#f8f9fa'
        case 'dark':
            return type === 'dark' ? '#1d2124' : '#343a40'
        case null:
            return ''
    }
}

export const getVariantProps = (variant: ButtonTypes) => {
    switch (variant) {
        case 'primary':
            return {
                backgroundColor: getVariantColor('primary'),
                textColor: '#000',
                borderRadius: '3px',
            }
        case 'secondary':
            return {
                backgroundColor: getVariantColor('secondary'),
                textColor: '#000',
                borderRadius: '3px',
            }
        case 'tertiary':
            return {
                backgroundColor: getVariantColor('tertiary'),
                textColor: '#000',
                borderRadius: '3px',
            }
        case 'danger':
            return {
                backgroundColor: getVariantColor('danger'),
                textColor: '#000',
                borderRadius: '3px',
            }
        case 'success':
            return {
                backgroundColor: getVariantColor('success'),
                textColor: '#000',
                borderRadius: '3px',
            }
        case 'warning':
            return {
                backgroundColor: getVariantColor('warning'),
                textColor: '#000',
                borderRadius: '3px',
            }
        case 'info':
            return {
                backgroundColor: getVariantColor('info'),
                textColor: '#000',
                borderRadius: '3px',
            }
        case 'light':
            return {
                backgroundColor: getVariantColor('light'),
                textColor: '#000',
                borderRadius: '3px',
            }
        case 'dark':
            return {
                backgroundColor: getVariantColor('dark'),
                textColor: '#000',
                borderRadius: '3px',
            }
        case 'link':
            return {
                backgroundColor: 'transparent',
                textColor: getVariantColor('primary'),
                borderRadius: '3px',
            }
        case null:
            return {}
    }
}

export const getShadowProps = (variant: ButtonTypes) => {
    switch (variant) {
        case 'primary':
            return {
                boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)',
            }
        case 'secondary':
            return {
                boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)',
            }
        case 'tertiary':
            return {
                boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)',
            }
        case 'danger':
            return {
                boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)',
            }
        case 'success':
            return {
                boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)',
            }
        case 'warning':
            return {
                boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)',
            }
        case 'info':
            return {
                boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)',
            }
        case 'light':
            return {
                boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)',
            }
        case 'dark':
            return {
                boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)',
            }
        case 'link':
            return {
                boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)',
            }
        case null:
            return {}
    }
}

export const getHoverProps = (variant: ButtonTypes) => {
    switch (variant) {
        case 'primary':
            return {
                backgroundColor: getVariantColor('primary', 'dark'),
            }
        case 'secondary':
            return {
                backgroundColor: getVariantColor('secondary', 'dark'),
            }
        case 'tertiary':
            return {
                backgroundColor: getVariantColor('tertiary', 'dark'),
            }
        case 'danger':
            return {
                backgroundColor: getVariantColor('danger', 'dark'),
            }
        case 'success':
            return {
                backgroundColor: getVariantColor('success', 'dark'),
            }
        case 'warning':
            return {
                backgroundColor: getVariantColor('warning', 'dark'),
            }
        case 'info':
            return {
                backgroundColor: getVariantColor('info', 'dark'),
            }
        case 'light':
            return {
                backgroundColor: getVariantColor('light', 'dark'),
            }
        case 'dark':
            return {
                backgroundColor: getVariantColor('dark', 'dark'),
            }
        case 'link':
            return {
                backgroundColor: 'transparent',
            }
        case null:
            return {}
    }
}

export const getSwitcherShapeProps = (
    shape: ShapeTypes,
    roundedRadius: string
) => {
    switch (shape) {
        case 'rounded':
            return {
                borderRadius: roundedRadius,
            }
        case 'square':
            return {
                borderRadius: '0.25rem',
            }
        case 'sharp':
            return {
                borderRadius: '0',
            }
        case undefined:
            return {
                borderRadius: roundedRadius,
            }
    }
}

export const getButtonAnimation = (variant: ButtonTypes) => {}
