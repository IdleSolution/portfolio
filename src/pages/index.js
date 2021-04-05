import * as React from "react"
import SEO from "../components/seo"
import { Intro } from '../components/landing/Intro/index'

const IndexPage = ({location, loadNewPage}) => (
    <>
        <SEO title="Home"/>
        <Intro loadNewPage={loadNewPage}/>
    </>

)

export default IndexPage
