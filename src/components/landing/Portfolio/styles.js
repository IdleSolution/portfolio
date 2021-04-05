import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;

    h1 {
        color: #fff;
        margin-bottom: .5rem;
        font-size: 3rem;
    }

    p {
        color: #a5a4a4;
        font-size: 1.6rem;
    }
`

export const Header = styled.div`
    background-color: #5d5656;
    width: 100%;
    padding: 2rem 0;

`

export const Text = styled.div`
    margin-left: 20%;

    @media(max-width: 1000px) {
        width: 80%;
        margin-left: 15%;
    }
`
export const CardsContainer = styled.div`
    margin-top: 7rem;
    width: 70%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;

    @media(max-width: 1000px) {
        flex-flow: column;
        align-items: center;
    }
`

export const Card = styled.div`
    width: 30%;
    height: 15rem;
    padding: 1rem;
    cursor: pointer;
    border-radius: 10px;
    margin-bottom: 2rem;
    position: relative;
    background-image: url(${props => props.image});
    background-blend-mode: darken;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.5);

    img {
        width: 100%;
        height: 100%;
    }

    :hover {
        background-color: rgba(0, 0, 0, 0.7);
    }

    ::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 9000;
        background: linear-gradient(to bottom,transparent 0%, transparent 60%, black 100%);
    }

    @media(max-width: 1000px) {
        width: 100%;
        height: 30rem;
    }

    @media(max-width: 400px) {
        height: 20rem;
    }

`


export const Description = styled.div`
    position: absolute;
    z-index: 10000;
    width: 100%;

    bottom: .5rem;
    h3 {
        color: #fff;
        margin-bottom: .2rem;
        font-size: 1.8rem;

        @media(max-width: 700px) {
            font-size: 3rem;
            margin-bottom: .5rem;

        }
    }
    p {
        color: #fff;
        font-size: .9rem;
        width: 90%;

        @media(max-width: 1000px) {
            font-size: 1.4rem;
        }

    }

`

export const Technologies = styled.div`
    display: flex;
`

export const Technology = styled.span`
    color: #fff;
    background-color: rgb(250,115,97);
    padding: .2rem .4rem;
    border-radius: 10px;
    font-size: .7rem;
    margin: 0 .3rem;
    font-size: .8rem;

    @media(max-width: 1000px) {
        font-size: 1.4rem;
        padding: .4rem .8rem;
    }

    @media(max-width: 400px) {
        font-size: 1.2rem;
        padding: .3rem .5rem;
    }
`
