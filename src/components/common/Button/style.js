import styled from 'styled-components';



export const Container = styled.div`
    border: 1px solid rgb(250, 115, 97);
    width: 10rem;
    height: 3rem;
    color: #fff;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    transition: all .2s;


    :hover {
        transform: translateY(-.3rem);
        box-shadow: 0 1rem 2rem rgba($color-black, .35);
    }

    :active {
        transform: translateY(.05rem);
        box-shadow: 0 1rem 2rem rgba($color-black, .1);
    }
`