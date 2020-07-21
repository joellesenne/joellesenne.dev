import styled, { keyframes, css } from 'styled-components'

const slideDownFade = keyframes`
  0% {
    opacity: 0;
    transform: translate(-50%, -70%);
  }
  100% {
    opacity: 1;
  }
`

const slideDownFadeCover = (length) => css`
  animation: ${slideDownFade} ${length} ease-in-out;
`

export const Header = styled.header`
  position: relative;
  z-index: 1;
  height: ${(props) => (props.big ? '650px' : '450px')};
  background: ${(props) => (props.bg ? props.theme.gradient.rightToLeft : 'transparent')};
  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    height: ${(props) => (props.big ? '600px' : '400px')};
  }
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    height: ${(props) => (props.big ? '500px' : '325px')};
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
  transform: translate(-50%, -60%);
  width: 80%;
  max-width: 800px;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  ${slideDownFadeCover('0.5s')};
  animation-delay: 0s;
  animation-iteration-count: 1;
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    margin-bottom: 7rem;
    padding: 0;
  }
`
