import React from 'react'


type TextProps = {
    children: React.ReactNode
}

const Text: React.FC<TextProps> = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default Text