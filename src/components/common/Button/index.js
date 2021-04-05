import React from 'react';
import { Container } from './style'

export const Button = ({text, clickEvent}) => {
    return (
        <Container onClick={clickEvent}>
            {text}
        </Container>
    )
}
