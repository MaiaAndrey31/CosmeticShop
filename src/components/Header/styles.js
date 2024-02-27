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
    font-size: 1.5rem;
    color: ${theme.colors.white};
  }
  
`

export const NavLink = styled.div`
  display: flex;
  justify-content: space-between;

  ul {
    list-style: none;
    display: flex;
    gap: 1.25rem;
  }

  li {
    color: ${theme.colors.white};
    cursor: pointer;
    font-size: 1.5rem;
    
  }
`

export const Users = styled.div`
display: flex;
gap: 1.5rem;
 font-size: 2.5rem;
 color: ${theme.colors.white};
 align-items: center;

 p {
  font-size: 1.5rem;
  font-weight: 400;
 }
`
