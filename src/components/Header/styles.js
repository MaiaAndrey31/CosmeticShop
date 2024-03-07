import { styled } from 'styled-components'
import { theme } from '../../styles/theme'

export const Container = styled.header`
  width: 100%;
  height: 12%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.colors.primary};
  font-weight: 600;
  padding: 0rem 3rem;

  h1{
    font-size: 2.5rem;
    color: ${theme.colors.white};

    span {
      color: ${theme.colors.secondary};
    }
  }
  
`

export const NavLink = styled.div`
  display: flex;
  justify-content: space-between;

  ul {
    list-style: none;
    display: flex;
    gap: 4rem;
  }
  

  li {
    color: ${theme.colors.white};
    cursor: pointer;
    font-size: 1.6rem;
    font-weight: 600;
    transition: 0.3s ease-in-out;
    position: relative;
    letter-spacing: 0.03rem;
    padding: 0 1rem;

    &:hover {
      color: ${theme.colors.secondary};
    }

    &::after {
      content: '';
      width: 0%;
      height: 2px;
      background-color: ${theme.colors.secondary};
      position: absolute;
      bottom: -2px;
      left: 0;
      transition: 0.5s ease-in-out;
    }

    &:hover::after {
      width: 100%;
    }
  }
`

export const Users = styled.div`
display: flex;
gap: 1.5rem;
 font-size: 2.5rem;
 color: ${theme.colors.white};
 align-items: center;
 div {
  display: flex;
  gap: 0.125rem;
  align-items: center;
  cursor: pointer;
  &:hover {
     
     color: ${theme.colors.secondary};
      transform: scale(1.05);
      
  }
 }

 p {
  font-size: 1.5rem;
  font-weight: 400;
  
 }
 
`

export const SearchIcon = styled.div`
&:hover {
     
     color: ${theme.colors.secondary};
      transform: scale(1.05);
      
  }
`
