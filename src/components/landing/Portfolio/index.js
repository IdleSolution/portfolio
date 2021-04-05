import React from 'react'
import { Container, Header, Text, CardsContainer, Card, Description, Technology, Technologies } from './styles.js'
import { Footer } from './../../common/Footer/index'

export const Portfolio = ({data, loadNewPage}) => {
    return (
        <Container>
            <Header>
                <Text>
                    <h1>Portfolio</h1>
                    <p>Personal projects that I worked on in the past</p>
                </Text>
            </Header>
            <CardsContainer>
                {data.map(project => (
                    <Card key={project.node.frontmatter.title} image={project.node.frontmatter.mainImg}
                        onClick={() => loadNewPage(project.node.frontmatter.slug)}>
                        <Technologies>
                            <div style={{flex: 1}}/>
                            {project.node.frontmatter.mainTechnologies.map(technology => (
                                <Technology>{technology}</Technology>
                            ))}
                        </Technologies>
                        <Description>
                            <h3>{project.node.frontmatter.title}</h3>
                            <p>{project.node.frontmatter.description}</p>
                        </Description>
                    </Card>
                ))}
            </CardsContainer>

            <Footer />
        </Container>
    )
}

