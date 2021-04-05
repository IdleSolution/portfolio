import styled, { keyframes, css } from 'styled-components';


const animate = keyframes`
    0% { left: -100% }
    30% { left: 0 }
    70% { left: 0 }
    100% { left: 100% }
`

export const Container = styled.div`
    height: 100%;
    width: 100%;
    background-color: #5f5a5a;
    position: absolute;
    top: 0;
    left: -100%;
    z-index: 99999;
    animation-name: ${props => props.loadingPage ? css`${animate};` : ''}
    animation-duration: 2s;


    ${props => props.loadingPage && `

    `}
`