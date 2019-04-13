import styled from 'styled-components'

export const Footer = styled.footer`
  position: relative;
  padding: 2rem 0 1rem;
  width: 100%;
  height: auto;
  text-align: center;
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 2rem 1rem 0.5rem;
  }
`
