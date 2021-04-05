import React, { Segment, useState } from 'react'
import { Container, Item } from './styles.js'
import { Location } from '@reach/router';

const Sidebar = ({openSidebar, location, loadNewPage}) => {

    const currPath = location.pathname;
    return (
        <Container open={openSidebar}>
            <Item onClick={() => loadNewPage('/')} currPage={currPath === '/'}>
                <h4>Home</h4>
                <p>Introduction</p>
            </Item>
            <Item onClick={() => loadNewPage('/about')} currPage={currPath.startsWith('/about')}>
                <h4>About</h4>
                <p>Skills and education</p>
            </Item>
            <Item onClick={() => loadNewPage('/portfolio')} currPage={currPath === '/portfolio'}>
                <h4>Portfolio</h4>
                <p>My personal projects</p>
            </Item>
            <Item onClick={() => loadNewPage('/contact')} currPage={currPath.startsWith('/contact')}>
                <h4>Contact</h4>
                <p>Talk with me</p>
            </Item>
        </Container>
    )
}

export default props => (
    <Location>
      {locationProps => <Sidebar {...locationProps} {...props} />}
    </Location>
  );