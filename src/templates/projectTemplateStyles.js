import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
`

export const Header = styled.div`
    background-color: #5d5656;
    width: 100%;
    padding: 2rem 0;

    h1 {
        color: #fff;
        margin-bottom: .5rem;
        font-size: 3rem;
    }

    p {
        color: #a5a4a4;
        font-size: 1.6rem;
    }

    @media(max-width: 600px) {
        padding: 1rem 0;

        h1 {
            font-size: 2.5rem;
        }
        p {
            font-size: 1.4rem;
        }
    }
`

export const Text = styled.div`
    margin-left: 20%;
`

export const Card = styled.div`
    width: 70%;
    margin-top: 5%;
    display: flex;

    @media(max-width: 1000px) {
        width: 80%;
        flex-direction: column;
        align-items: center;
    }
`

export const ImgContainer = styled.div`
    border-radius: 6px;
    height: 25rem;
    background-image: url(${props => props.image});
    background-blend-mode: darken;
    background-size: cover;
    background-position: left;
    background-repeat: no-repeat;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.5);
    position: relative;

    @media(max-width: 1000px) {
        height: 30rem;
    }


    @media(max-width: 400px) {
        height: 25rem;
        background-position: ${props => props.reddit ? 'left' : 'center'};

    }




`

export const Description = styled.div`
    width: 70%;
    margin-right: 2rem;

    @media(max-width: 1000px) {
        width: 100%;
    }
`

export const TextDescription = styled.div`
    margin-top: 5%;

    h2 {
        color: #fff;
        font-size: 1.7rem;

        @media(max-width: 1000px) {
            font-size: 3rem;
        }
    }

    p {
        color: #a5a4a4;

        @media(max-width: 1000px) {
            font-size: 1.3rem;
        }
    }

    a {
        outline: none;
        text-decoration: none;
        color: rgb(250,115,97);
    }

    li {
        color: #a5a4a4;

        @media(max-width: 1000px) {
            font-size: 1.3rem;
        }
    }
`


export const Box = styled.div`
    background-color: #5d5656;
    border-radius: 2px;
    width: 20rem;
    @media(max-width: 1000px) {
        display: none;
    }
`

export const Side = styled.div`
    @media(max-width: 1000px) {
        display: flex;
        
        width: 70%;
    }
`


export const BoxHeader = styled.div`
    color: #fff;
    background-color: #3e3b3b;
    padding: .4rem 1rem;
    font-size: 1.3rem;
`

export const BoxBody = styled.div`
    padding: 1rem;
    margin-bottom: 2rem;
     a {
        outline: none;
        text-decoration: none;
        color: #a5a4a4;
     }
`

export const Technologies = styled.div`
    display: flex;
    flex-flow: row wrap;
`

export const Technology = styled.span`
    color: #fff;
    background-color: #a5a4a4;
    padding: .2rem .4rem;
    border-radius: 10px;
    font-size: .7rem;
    margin: .5rem .3rem;
    font-size: .8rem;

    @media(max-width: 1000px) {
        display: block;
        font-size: 1.2rem;
        padding: .3rem .5rem;
    }

`

export const TechnologiesMobile = styled.div`
     display: none;

     @media(max-width: 1000px) {
         display: flex;
         flex-flow: row wrap;
         margin-top 2rem;

     }
`