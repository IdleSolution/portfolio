import React, { useState, useEffect } from 'react'
import { Container } from './styles.js'
import { globalHistory } from '@reach/router'

export const Loading = ({loadingPage}) => {

    
    return (
        <Container loadingPage={loadingPage}></Container>
    )
}
