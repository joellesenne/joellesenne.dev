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

export const Heros = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
  margin-bottom: 7rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  max-width: 800px;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    margin-bottom: 5rem;
    padding: 0;
  }
`
