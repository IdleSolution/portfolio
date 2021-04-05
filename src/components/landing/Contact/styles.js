import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-flow: column;
    justify-content: center;
`

export const Wrapper = styled.div`
    margin-left: 20%;
    padding: 4rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 960px) {
        flex-direction: column;
    }
    `;

export const Details = styled.div`
    margin-right: 5%;
    @media (max-width: 960px) {
        padding-right: unset;
        width: 100%;
        order: 1;
    }
    h1 {
        font-size: 3rem;
        margin-bottom: 1rem;
        color: #fff;
    }
    h2 {
        font-size: 1.4rem;
        color: #fff;
    }
    p {
        margin-bottom: 2rem;
        font-size: 1rem;
        font-weight: normal;
        line-height: 1.3;
        color: #a5a4a4;
    }
    ul {
        color: #a5a4a4;
        a {
            color: rgb(250,115,97);
            text-decoration: none;
        }
        
    }
    `;

export const Thumbnail = styled.div`
    margin-right: 5%;
    flex: 1;
    @media (max-width: 960px) {
        width: 100%;
        margin-bottom: 2rem;
    }
    img {
        width: 100%;
    }
    `;