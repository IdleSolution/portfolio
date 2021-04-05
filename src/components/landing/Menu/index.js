import React from 'react'
import { Container, HamburgerContainer, Hamburger, HomeContainer, LinksContainer } from './styles.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'

export const Menu = ({openSidebar, setOpenSidebar, loadNewPage}) => {
    return (
        <Container open={openSidebar}>
            <HomeContainer>
                <FontAwesomeIcon onClick={() => loadNewPage('/')} 
                    style={{color: '#fff', cursor: 'pointer'}} icon={faHome}/>
            </HomeContainer>

            <HamburgerContainer open={openSidebar} onClick={() => setOpenSidebar(!openSidebar)}>
                <Hamburger />
            </HamburgerContainer>
            <LinksContainer>
                <a target='_blank' href='https://github.com/IdleSolution'>
                <FontAwesomeIcon style={{fontSize: '1.5rem', color: '#fff'}} icon={faGithub}/>
                </a>
             </LinksContainer>

        </Container>
    )
}
