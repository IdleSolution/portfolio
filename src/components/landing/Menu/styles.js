import styled from 'styled-components';


export const Container = styled.div`
    height: 100%;
    width: 4.5rem;
    background-color: #3e3b3b;
    box-shadow: ${props => props.open ? 'none;' : '10px 10px 8px rgb(40, 40, 40);'}
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-between;
    z-index: 99999999999999999;
    padding: 1rem 0;

    @media(max-width: 1000px) {
        ${props => !props.open && `
            background-color: transparent;
            box-shadow: none;
            flex-flow: column;
        `}
    }
`

export const HamburgerContainer = styled.div`
    ${props => props.open && `
        div {
            visibility: hidden;
        }

        div::after {
            visibility: visible;
            transform: rotate(40deg);
            transition: transform .2s ease-in-out;

        }

        div::before {
            visibility: visible;
            transform: rotate(-40deg);
            transition: transform .2s ease-in-out;

        }
    `}
    cursor: pointer;
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform .2s ease-in-out;
    z-index: 2;


    ${props => !props.open && `

        @media(min-width: 1000px) {
            :hover div::after {
                transition: transform .2s ease-in-out;
                transform: translateY(-.65rem);
            }
    
            :hover div::before {
                transition: transform .2s ease-in-out;
                transform: translateY(.65rem);
            }
        }


    `}

    @media(max-width: 1000px) {
        width: 3.5rem;
        position: absolute;
        top: 5rem;
    }


`

export const Hamburger = styled.div`
    width: 100%;
    height: .1rem;
    background-color: #fff;
    position: relative;

    ::after {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        background-color: #fff;
        transform: translateY(-.5rem);
    }

    ::before {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        background-color: #fff;
        transform: translateY(.5rem);
    }

    @media(max-width: 1000px) {
        mix-blend-mode: difference;
        width: 3.5rem;
        background-color: rgb(249, 138, 123);

        ::after {
            transform: translateY(-1rem);
            background-color: rgb(249, 138, 123);

        }

        ::before {
            transform: translateY(1rem);
            background-color: rgb(249, 138, 123);

        }
    }

`

export const LinksContainer = styled.div`
    @media(max-width: 1000px) {
        display: none;
    }
`

export const HomeContainer = styled.div`
    font-size: 1.6rem;
    @media(max-width: 1000px) {
        display: none;
    }
`