import React from 'react'
import { SkillsWrapper, Wrapper, Thumbnail, Details, Container, Technologies, Technology, TechnologyList, Education, Single, Bullet } from './styles'
import dev from '../../../assets/illustrations/skills.svg';
import reactIcon from '../../../assets/technologies/React.svg';
import cSharpIcon from '../../../assets/technologies/c#.svg';
import nodeIcon from '../../../assets/technologies/Nodejs.svg';
import typescriptIcon from '../../../assets/technologies/Typescript.svg';
import aspIcon from '../../../assets/technologies/ASP.NET Core.svg';
import gitIcon from '../../../assets/technologies/git.svg';
import jsIcon from '../../../assets/technologies/js.svg';
import cssIcon from '../../../assets/technologies/css.svg';
import sassIcon from '../../../assets/technologies/sass.svg';
import htmlIcon from '../../../assets/technologies/html.svg';
import postgresIcon from '../../../assets/technologies/postgres.svg';
import msSQLIcon from '../../../assets/technologies/mssql.svg';
import gatsbyIcon from '../../../assets/technologies/gatsby.svg';
import reduxIcon from '../../../assets/technologies/redux.svg';
import mobxIcon from '../../../assets/technologies/mobx.svg';
import { Footer } from '../../common/Footer';


export const About = () => {
    return (
        <Container>
            <Wrapper>
                <SkillsWrapper>
                    <Thumbnail>
                        <img src={dev}/>
                    </Thumbnail>
                    <Details>
                        <h1>About me</h1>
                        <p>Hi! My name is Kamil Brzozowski. I am currently studying computer science in Jagellonian University.
                        I've been programming for quite some time now and I absolutely love it. The field I'm most interested in right now is
                        web development and, while I can do some front-end work, I prefer to be the back-end guy as it is what satisfies me the most. 
                        I would love to enter the field soon.</p>
                    </Details>
                </SkillsWrapper>
            </Wrapper>
            <Technologies>
                <h2>Technologies I recently used</h2>
                <TechnologyList>
                    <Technology>
                        <img src={jsIcon} alt='javascript icon'/>
                        <p>Javascript</p>
                    </Technology>
                    <Technology>
                        <img src={nodeIcon}  alt='node.js icon'/>
                        <p>Node.js with Express</p>
                    </Technology>
                    <Technology>
                        <img src={reactIcon} alt='react icon'/>
                        <p>React</p>
                    </Technology>
                    <Technology>
                        <img src={cSharpIcon} alt='c# icon'/>
                        <p>C#</p>
                    </Technology>
                    <Technology>
                        <img src={typescriptIcon} alt='typescript icon'/>
                        <p>Typescript</p>
                    </Technology>
                    <Technology>
                        <img src={aspIcon} alt='asp.net core icon'/>
                        <p>ASP.NET Core</p>
                    </Technology>
                    <Technology>
                        <img src={gitIcon} alt='github icon'/>
                        <p>Git</p>
                    </Technology>

                    <Technology>
                        <img src={cssIcon} alt='css icon'/>
                        <p>CSS</p>
                    </Technology>
                    <Technology>
                        <img src={sassIcon} alt='sass icon'/>
                        <p>SASS</p>
                    </Technology>
                    <Technology>
                        <img src={htmlIcon} alt='html icon'/>
                        <p>HTML</p>
                    </Technology>
                    <Technology>
                        <img src={postgresIcon} alt='postgres icon'/>
                        <p>PostgreSQL</p>
                    </Technology>
                    <Technology>
                        <img src={msSQLIcon} alt='ms sql icon'/>
                        <p>MS SQL Server</p>
                    </Technology>
                    <Technology>
                        <img src={gatsbyIcon} alt='gatsby icon'/>
                        <p>Gatsby.js</p>
                    </Technology>
                    <Technology>
                        <img src={reduxIcon} alt='redux icon'/>
                        <p>Redux</p>
                    </Technology>
                    <Technology>
                        <img src={mobxIcon} alt='mobx icon'/>
                        <p>MobX</p>
                    </Technology>
                </TechnologyList>
            </Technologies>
            <Education>
                <h2>Education</h2>
                <Single>
                    <Bullet />
                    <div>
                        <h3>Jagiellonian University</h3>
                        <p>Computer science, Wydział matematyki i informatyki</p>
                        <p>I'm currently studying hard to get through fourth semester. During my studies I've learnt a lot of things 
                            that I want to make use of now! </p>
                        <p>Start date: 2019</p>
                    </div>

                </Single>
            </Education>
            <Footer />
        </Container>
    )
}
