import styled from 'styled-components';
import overlayIllustration from '../../../assets/illustrations/overlay.svg';

export const Wrapper = styled.div`
  background-image: url(${overlayIllustration});
  background-size: contain;
  background-position: right top;
  background-repeat: no-repeat;
  background-color: #212121;
  padding-top: 5rem;
`

export const IntroWrapper = styled.div`
  padding: 4rem 0;
  margin: 0 15rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1000px) {
    flex-direction: column;
    margin-left: 15rem;
    margin-right: 10rem;
  }

  @media(max-width: 800px) {
    margin-left: 10rem;
  }

  @media(max-width: 500px) {
    margin: 0 5rem;
  }
  

`;

export const Details = styled.div`
  flex: 1;
  @media (max-width: 1000px) {
    width: 100%;
    margin-bottom: 2rem;
  }
  h1 {
    margin-bottom: 2rem;
    font-size: 2.8rem;
    color: #fff;
    @media (max-width: 1000px) {
      mix-blend-mode: difference;
      font-size: 3.5rem;
    }
    @media(min-width: 2000px) {
      mix-blend-mode: difference;

    }

  }
  h2 {
    margin-bottom: 2.5rem;
    font-size: 2.4rem;
    font-weight: normal;
    color: #e6e6e6;
    @media (max-width: 1000px) {
      mix-blend-mode: difference;
      
    }
    @media(min-width: 2000px) {
      mix-blend-mode: difference;

    }
  }
  h4 {
    font-size: 1.5rem;
    font-weight: 100;
    color: #fff;


    @media(min-width: 2000px) {
      mix-blend-mode: difference;

    }
    @media(max-width: 1000px) {
      mix-blend-mode: difference;
    }

  }

  img {
    width: 2rem;
    height: 100%;
    margin-bottom: 0;
    margin-left: 5px;
    margin-right: 5px;
  }
`;

export const Technology = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 4px;

  p {
    margin-bottom: 0;
    width: 8.5rem;
  }
`



export const Thumbnail = styled.div`
  flex: 1;
  @media (max-width: 1000px) {
    width: 100%;
  }
  img {
    width: 100%;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;

  div {
    margin-right: 2rem;

    @media(max-width: 1000px) {
      mix-blend-mode: difference;
      height: 4rem;
      width: 15rem;
    }

  }

`

export const ImgContainer = styled.div`
  height: 2rem;
`