import React, { useEffect, useState } from 'react'
import { Container, Header, Text, Card, ImgContainer, Description, TextDescription,
     Side, Box, BoxBody, BoxHeader, Technologies, Technology, TechnologiesMobile } from './projectTemplateStyles';
import { Footer } from './../components/common/Footer/index';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { Splide, SplideSlide } from '@splidejs/react-splide'



const ProjectTemplate = ({ pageContext }) => {
    const { html, online, imgs, technologies, title, description } = pageContext;
    const isWindow = typeof window !== "undefined" && window


    const checkWindow = () => {
        return typeof window !== "undefined";
    }
    return (
        <Container>
            <Header>
                <Text>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </Text>
            </Header>
            <Card>
                <Description>
                    {imgs.length === 1 ? (
                        <ImgContainer image={imgs[0]} />
                    ) : (checkWindow() && (
                        <Splide
                        options={ {
                            rewind : true,
                            gap    : '1rem',
                        }}>
                            {imgs.map(img => (
                                <SplideSlide>
                                    <ImgContainer image={img} reddit={title === 'Reddit clone'} />
                                </SplideSlide>
                            ))}
                        </Splide>
                    )

                    )}
                    <TechnologiesMobile>
                        {technologies.map(technology => (
                            <Technology>{technology}</Technology>
                        ))}
                    </TechnologiesMobile>

                    <TextDescription dangerouslySetInnerHTML={{__html: html}}></TextDescription>
                </Description>
                <Side>
                    {online && (
                        <Box>
                            <BoxHeader>
                                Online
                            </BoxHeader>
                            <BoxBody>
                                <a target="_blank" href={online}>{online}</a>
                            </BoxBody>
                        </Box>
                    )}
                        <Box>
                        <BoxHeader>
                            Technologies
                        </BoxHeader>
                        <BoxBody>
                            <Technologies>
                                {technologies.map(technology => (
                                    <Technology>{technology}</Technology>
                                ))}
                            </Technologies>
                        </BoxBody>
                    </Box>
                </Side>
            </Card>
            <Footer />
        </Container>

    )
}



export default ProjectTemplate;