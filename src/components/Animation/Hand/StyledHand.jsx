import styled, { keyframes, css } from 'styled-components'

// Hand Animation
const hand = keyframes`
  0% {
    transform: rotate(20deg) translate(0px, 0px);
  }
  100% {
    transform: rotate(30deg);
  }
`

export const handAnimation = length => css`
  animation: ${hand} ${length} alternate infinite;
  animation-duration: 400ms;
  animation-timing-function: ease-in-out;
  animation-direction: alternate;
  animation-iteration-count: 6;
  transform-origin: right bottom;
`

export const StyledHand = styled.span`
  display: inline-block;
  position: relative;
  margin-left: 10px;
  top: 5px;
  left: -15px;
  transform: rotate(20deg);
  ${handAnimation('15s')};
`
