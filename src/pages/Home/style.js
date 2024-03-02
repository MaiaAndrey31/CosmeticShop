import {styled} from 'styled-components'
import HomeBg from '../../assets/HomeBg.png'
import { theme } from '../../styles/theme';

export const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
font-weight: 600;
;
`

export const Image = styled.div`
width: 100%;
height: 90%;
background-image:url(${HomeBg});
background-size: cover;

display: flex;
  padding: 0 50px;
`

export const ContentBanner = styled.div`

    max-width:60rem;
    display: flex;
    gap: 3.75rem;
    justify-content: center;
    flex-direction: column;
    color: ${theme.colors.white};
    padding: 0 0 0 10rem;
    margin-left: 5rem;
    
    h4{
        font-size: 2rem;
    }
  

  h2 {
    line-height: 1.1em;
    font-size: 5rem;
    
  }

  span {
    color: ${theme.colors.secondary};
    font-style: italic;
    font-size: 5rem;
    font-weight: 100;
  }

  p {
    font-size: 1.425rem;
  }


 
`