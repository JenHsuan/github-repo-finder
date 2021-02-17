import styled from 'styled-components';
import { variant } from 'styled-system';

interface IProps {
  variant: string
}

interface Img {
  variant: string,
  src: string
}

export const TemplateStyle = styled('div')<IProps>(
    variant({
      scale: 'template',
      variants: {
        main: {}
      },
    })
);

export const ReposContainerStyle = styled('div')<IProps>(
  variant({
    scale: 'reposContainer',
    variants: {
      basic: {}
    },
  })
);

export const RepoStyle = styled.div`
  border: 1px solid black;
  width: 20%;
  transition: width 0.7s ease-out;
  margin: 3px;
  padding: 1%;
  border-radius: 5px;
  background-color:#FAFAFA;
  cursor: pointer;
  @media (max-width: 1000px){
    width: 40%;
 }
  @media screen and (max-width: 700px){
    width: 80%;
  }
`;

export const RepoImgStyle = styled('img')<Img>(
  variant({
    scale: 'repoImg',
    variants: {
      basic: {}
    },
  })
);

export const RepoTextStyle = styled('div')<IProps>(
  variant({
    scale: 'repoText',
    variants: {
      basic: {}
    },
  })
);

export const SearchBarContainerStyle = styled.div`
  input {
    width: 30%;
    margin-top: 5%;
    margin-left: 10%;
    border: 1px solid black;
    border-radius: 5px;
    box-shadow: 0 5px 5px gray, 0 0 0 5px #ffffffeb;
    height: 40px;
  }
`;

export const SpinnerContainerStyle = styled.div`
  transform:'translate(50%)'
`;
