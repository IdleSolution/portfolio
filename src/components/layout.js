/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Menu } from './landing/Menu/index';
import Sidebar from './landing/Sidebar/index';
import { Loading } from './common/Loading/index';
import { navigate } from 'gatsby';


import "./layout.css"

const Layout = ({ children, location }) => {
    const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
    const [openSidebar, setOpenSidebar] = useState(false);
    const [loadingPage, setLoadingPage] = useState(false);

    const loadNewPage = (path) => {
        if (location.pathname !== path) {
            setLoadingPage(true);
            setOpenSidebar(false);
            setTimeout(() => {
                navigate(path);
            }, 600)
            setTimeout(() => {
                setLoadingPage(false);
            }, 2000)
        }

    }

    const childrenWithProps = React.Children.map(children, (child) =>
        React.cloneElement(child, { loadNewPage: loadNewPage })
    );

    return (
        <>
            <div
                style={{
                    margin: `0 auto`,
                    backgroundColor: '#212121',
                    position: 'relative',
                    overflow: 'hidden'
                }}
            >
                <Menu openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} loadNewPage={loadNewPage} />
                <Sidebar openSidebar={openSidebar} loadNewPage={loadNewPage} />
                <Loading loadingPage={loadingPage} />
                <main>{childrenWithProps}</main>

            </div>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
