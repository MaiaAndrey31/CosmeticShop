import { styled } from 'styled-components'

import { theme } from '../../styles/theme'

export const Container = styled.div`
  background-color: ${theme.colors.black};
`

export const Spacer = styled.div`
  width: 100%;
  height: 10vh;
`

export const Content = styled.div`
  background-color: ${theme.colors.black};
  border-top: 1px solid ${theme.colors.neutral};
  border-bottom: 1px solid ${theme.colors.neutral};
  /* height: 60vh; */
  width: 100%;
  padding-bottom: 4rem;

  display: flex;
  gap: 1rem;
  justify-content: space-around;
  align-items: flex-start;
  padding-top: 7rem;
`

export const Collum = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  div {
    padding-bottom: 1.5rem;
  }
`

export const Title = styled.h1`
  font-size: 2rem;
  color: ${theme.colors.white};
  padding-bottom: 2rem;
`

export const Link = styled.a`
  font-size: 1.2rem;
  text-decoration: none;
  color: ${theme.colors.light};
  cursor: pointer;
  line-height:2.1rem;
`

export const Text = styled.p`
    font-size: 1.2rem;
  line-height: 2.1rem;
  color: ${theme.colors.light};
`

export const TextCopy = styled.p`
  padding: 1rem;
  font-size: 1.2rem;
  line-height: 1.4;
  color: ${theme.colors.light};
  display: flex;
  justify-content: center;
`

export const Icons = styled.div`
  display: flex;
  gap: 1.5rem;
  color: ${theme.colors.white};
  font-size: 1.7rem;
  cursor: pointer;
`
