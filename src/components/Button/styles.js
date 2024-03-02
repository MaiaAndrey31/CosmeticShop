import {styled} from 'styled-components'
import { theme } from '../../styles/theme';


export const Container = styled.button`
 
    background-color: transparent;
    border: 1px solid ${theme.colors.light};
    width: 9rem;
    height: 4rem;
    color: ${theme.colors.white};
    font-size: 1.4rem;
    transition: all 200ms;
    cursor: pointer;

    &:hover {
     
        background-color: ${theme.colors.secondary};
        transform: scale(1.05);
        
    }
  
`