import styled, { keyframes, css } from 'styled-components'
import { lighten } from 'polished'

const slideUpFade = keyframes`
  0% {
    opacity: 0;
    transform: translateY(5%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

const slideUpFadeCover = (length) => css`
  animation: ${slideUpFade} ${length} ease-in-out;
`

const Content = styled.section`
  margin-top: 2.5rem;
  grid-column: 2;
  position: relative;
  border-radius: 1rem;
  padding: 4rem 6rem;
  background-color: ${(props) => lighten(0.08, props.theme.colors.base.bg)};
  box-shadow: 0 4px 120px rgba(0, 0, 0, 0.15);
  ${slideUpFadeCover('1s')};
  animation-delay: 0s;
  animation-iteration-count: 1;
  @media (max-width: ${(props) => props.theme.breakpoints.xl}) {
    padding: 2.5rem 4rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding: 1.5rem;
  }
  overflow: hidden;
`

export default Content
