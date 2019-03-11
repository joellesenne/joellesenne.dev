import styled from 'styled-components'

export const Header = styled.header`
  position: relative;
  z-index: 1;
  height: ${props => (props.big ? '650px' : '450px')};
  background: ${props => (props.bg ? props.theme.gradient.rightToLeft : 'transparent')};
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    height: ${props => (props.big ? '600px' : '400px')};
  }
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    height: ${props => (props.big ? '500px' : '325px')};
  }
`
