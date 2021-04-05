import React from 'react'
import { Wrapper,  Details, Thumbnail, Container } from './styles'; 
import contact from '../../../assets/illustrations/contact.svg'

export const Contact = () => {
    return (
        <Container>
            <Wrapper>
                <Details>
                    <h1>Contact</h1>
                    <h2>Where to find me</h2>
                    <p>If you feel like I could help you at some project feel free to contact me with the info below:</p>
                    <ul>
                        <li><strong>Email</strong>: <a href={'mailto:idlesoluszyn@gmail.com'}>idlesoluszyn@gmail.com</a></li>
                        <li><strong>Github</strong>: <a href={'https://github.com/IdleSolution'}>IdleSolution</a></li>
                        <li><strong>Facebook</strong>: <a href={'https://www.facebook.com/profile.php?id=100013232552212'}>Kamil Brzozowski</a></li>
                    </ul>
                </Details>
                <Thumbnail>
                    <img src={contact}/>
                </Thumbnail>
            </Wrapper>
        </Container>
    )
}
