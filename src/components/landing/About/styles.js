import styled from 'styled-components'
import detailsIllustration from '../../../assets/illustrations/details.svg';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
`

export const Wrapper = styled.div`
  background-image: url(${detailsIllustration});
  background-size: contain;
  background-position: left top;
  background-repeat: no-repeat;
  margin-left: 4.5rem;

  @media(max-width: 1000px) {
    margin-left: 0;
  }
`;

export const SkillsWrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  margin-left: 12rem;

  align-items: center;
  justify-content: space-between;

  @media (max-width: 1000px) {
    flex-direction: column;
    padding: 0;
    margin-left: 5rem;
  }

`;

export const Details = styled.div`
  flex: 1;
  padding-left: 2rem;
  margin-right: 3rem;
  @media (max-width: 1000px) {
    padding-left: unset;
    width: 100%;
    margin-bottom: 10rem;
  }
  h1 {
    margin-bottom: 2rem;
    font-size: 2.5rem;
    color: #fff;

    @media(max-width: 1000px) {
      mix-blend-mode: difference;
      font-size: 3rem;
    }


  }
  p {
    margin-bottom: 2.5rem;
    font-size: 1.3rem;
    font-weight: normal;
    line-height: 1.3;
    color: #c7c7c7;

    @media(max-width: 1000px) {
      mix-blend-mode: difference;
      font-size: 1.5rem;
    }

  }
`;

export const Thumbnail = styled.div`
  flex: 1;
  @media (max-width: 1000px) {
    width: 100%;
    margin-bottom: 2rem;
  }
  img {
    width: 100%;
  }
`;

export const Technologies = styled.div`
  width: 60%;
  margin-left: 10%;

  h2 {
    color: #fff;
    @media(max-width: 1000px) {
      font-size: 2rem;
    }
  }
  @media(max-width: 1000px) {
    margin-left: 0;
  }
  @media(max-width: 750px) {
    width: 80%;
  }

  @media(max-width: 550px) {
    width: 90%;
    margin: 0 1rem;
  }
`

export const TechnologyList = styled.div`
  display: flex;
  flex-flow: row wrap;
`

export const Technology = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;

  img {
    width: 2rem;
    height: 2rem;
    margin-right: .4rem;
  }
  p {
    color: #fff;
    font-size: 1.1rem;

    @media(max-width: 1000px) {
      font-size: 1.4rem;
    }
  }
`

export const Education = styled.div`
  margin-top: 5rem;
  width: 50%;


  h2 {
    color: #fff;
    font-size: 2.5rem;
    text-align: center;
  }

  @media(max-width: 1000px) {
    width: 60%;
    h2 {
      font-size: 3rem;  
    }
  }

  @media(max-width: 600px) {
    width: 70%;
  }
`

export const Single = styled.div`
  display: flex;

    h3 {
      color: #fff;
      margin-bottom: 0;
      font-size: 2rem;
    }

    p {
      color: #c7c7c7;
      font-size: 1.2rem;
    }
`

export const Bullet = styled.div`
    width: 30px;
    height: 20px;
    border-radius: 100%;
    background-color: rgb(250,115,97);
    margin-right: .5rem;
    margin-top: .5rem;

    @media(max-width: 650px) {
      width: 40px;
    }
    @media(max-width: 500px) {
      width: 50px;
    }
`