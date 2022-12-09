import React from 'react'
import styled from 'styled-components'


const StyledCard = styled.div`
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    width: 300px;
`

type CardProps = {
    children: React.ReactNode
}

const Card: React.FC<CardProps> = ({children }) => {
    return (
        <StyledCard>
            {children}
        </StyledCard>
    )
}

export default Card