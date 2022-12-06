import { SizesTypes } from './types'
import { ButtonTypes } from './types'

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

export const getVariantProps = (variant: ButtonTypes) => {
    switch (variant) {
        case 'primary':
            return {
                backgroundColor: '#007bff',
                textColor: '#fff',
            }
        case 'secondary':
            return {
                backgroundColor: '#d6cdcd',
                textColor: '#000',
            }
        case 'tertiary':
            return {
                backgroundColor: '#28a745',
                textColor: '#fff',
            }
        case 'danger':
            return {
                backgroundColor: '#dc3545',
                textColor: '#fff',
            }
        case 'success':
            return {
                backgroundColor: '#28a745',
                textColor: '#fff',
            }
        case 'warning':
            return {
                backgroundColor: '#ffc107',
                textColor: '#fff',
            }
        case 'info':
            return {
                backgroundColor: '#17a2b8',
                textColor: '#fff',
            }
        case 'light':
            return {
                backgroundColor: '#f8f9fa',
                textColor: '#000',
            }
        case 'dark':
            return {
                backgroundColor: '#343a40',
                textColor: '#fff',
            }
        case 'link':
            return {
                backgroundColor: 'transparent',
                textColor: '#007bff',
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
