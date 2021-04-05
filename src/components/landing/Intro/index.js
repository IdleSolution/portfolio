import React, { useContext, useEffect, useState } from 'react';
import { Wrapper, IntroWrapper, Details, Thumbnail, Technology, ButtonsContainer, ImgContainer } from './styles';
import { Button } from '../../common/Button/index'
import dev from '../../../assets/illustrations/dev.svg';
import reactIcon from '../../../assets/technologies/React.svg';
import cSharpIcon from '../../../assets/technologies/c#.svg';
import aspNetIcon from '../../../assets/technologies/ASP.NET Core.svg';
import nodeIcon from '../../../assets/technologies/Nodejs.svg';
import typeScriptIcon from '../../../assets/technologies/Typescript.svg';

export const Intro = ({ loadNewPage }) => {
    const technologies = ['Typescript', 'C#', 'React', 'ASP.NET Core', 'Node.js'];
    const icons = [typeScriptIcon, cSharpIcon, reactIcon, aspNetIcon, nodeIcon];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        let timeout = setTimeout(() => {
            if(index === technologies.length - 1) {
                setIndex(0);
            } else {
                setIndex(index + 1);
            }
        }, 1000)

        return (() => clearTimeout(timeout));
    }, [index])


    return (
        <div style={{height: '100vh'}}>
            <Wrapper>
                <IntroWrapper>
                    <Details>
                        <h1>Hi there!</h1>
                        <h2>My name is Kamil Brzozowski and I'm an aspiring software developer based in Kraków, Poland</h2>
                        <h4>I am currently studying computer science at Jagiellonian University.
                            On the side I have gained some experience by working with technologies like
                            <Technology>
                                <ImgContainer>
                                    <img src={icons[index]} alt={`${technologies[index]} icon`}/>
                                </ImgContainer>

                                <p>{technologies[index]}</p>
                            </Technology>
                        </h4>
                        <ButtonsContainer>
                            <Button clickEvent={() => loadNewPage('/portfolio')} text='My portfolio'/>
                            <Button clickEvent={() => loadNewPage('/contact')} text='Get in touch'/>
                        </ButtonsContainer>

                        
                    </Details>
                    <Thumbnail>
                        <img src={dev} />
                    </Thumbnail>
                </IntroWrapper>
            </Wrapper>
        </div>


    );
};
