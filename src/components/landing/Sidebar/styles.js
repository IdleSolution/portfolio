import styled from 'styled-components';


export const Container = styled.div`
    ${props => !props.open && `
        left: -21.5rem;

        @media(max-width: 1000px) {
            left: -25rem;
        }

    `}
    ${props => props.open && `
        left: 4.5rem;

    `}
    transition: all .7s ease-in-out;

    width: 25rem;
    height: 100%;
    position: fixed;
    top: 0;
    z-index: 999999;


`

export const Item = styled.div`


    height: 25%;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-flow: column;
    padding: 0 2rem;
    color: #fff;
    cursor: pointer;
    background-color: #5f5a5a;
    border-bottom: .2rem solid #808782;

    ::before {
        content: "";
        position: absolute;
        bottom: -3px;
        left: 0;
        width: 0;
        height: .2rem;
        background-color: rgb(250,115,97);

    }



    ${props => props.currPage && `
        background-color: #423e3e;

        ::before {
            width: 100%;
        }
    `}
    position: relative;
    text-decoration: none;


    :hover {
        background-color: #423e3e;

        ::before {
            width: 100%;
            transition: all .7s ease-in-out;

        }
    }

    h4 {
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: .5rem;
        outline: none;

    }
    p {
        font-size: 1.2rem;
        font-weight: 100;
        outline: none;

    }



`