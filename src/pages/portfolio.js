import * as React from "react"
import { Portfolio } from "../components/landing/Portfolio/index"
import SEO from "../components/seo"
import { graphql } from 'gatsby';

const PortfolioPage = ({data, loadNewPage}) => (
    <>
        <SEO title="Portfolio"/>
        <Portfolio data={data.allMarkdownRemark.edges} loadNewPage={loadNewPage}/>
    </>

)

export default PortfolioPage;

export const pageQuery = graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        html
                        frontmatter {
                            slug
                            title
                            description
                            mainTechnologies
                            mainImg
                        }
                    }
                }

            }
        }
        `
