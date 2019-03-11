import styled, { keyframes, css } from 'styled-components'
import { lighten } from 'polished'

// Blob Animation
const move = keyframes`
0% {
  transform: scale(1) translate(10px, -30px);
}
38% {
  transform: scale(0.8, 1) translate(80vw, 30vh) rotate(160deg);
}
40% {
  transform: scale(0.8, 1) translate(80vw, 30vh) rotate(160deg);
}
78% {
  transform: scale(1.3) translate(0vw, 50vh) rotate(-20deg);
}
80% {
  transform: scale(1.3) translate(0vw, 50vh) rotate(-20deg);
}
100% {
  transform: scale(1) translate(10px, -30px);
}
`

export const blobAnimation = length => css`
  animation: ${move} ${length} ease-in-out infinite alternate;
`

const Blob = () => css`
  position: absolute;
  left: 0;
  width: 25vmax;
  z-index: -1;
  ${blobAnimation('20s')};
  transform-origin: 50% 50%;
  transform-box: fill-box;
`

export const BlobHeader = styled.div`
  top: 0;
  ${Blob};
`

export const BlobProjects = styled.div`
  top: 600px;
  ${Blob};
  animation-delay: -3s;
`

export const BlobBlog = styled.div`
  top: 1200px;
  ${Blob};
  animation-delay: -9s;
`

export const BlobAbout = styled.div`
  top: 1800px;
  ${Blob};
  animation-delay: -6s;
`

// Hand Animation (Bug)
const hand = keyframes`
  0% {
    transform: rotate(20deg) translate(0px, 0px);
}
100% {
    transform: rotate(30deg) translate(-1px, -1px);
}
`

const handAnimation = length => css`
  animation: ${hand} ${length} 400ms ease-in-out alternate 6;
`

export const Hand = styled.span`
  position: relative;
  ${handAnimation('2000ms')}
  transform: rotate(20deg);
  transform-origin: right bottom;
`

// Rotate Animation
const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const rotateAnimation = length => css`
  animation: ${rotate} ${length} linear infinite;
`
// Wave Animation
const wave = keyframes`
  0% {
    d: path("M 0 100 
    Q 250 50 400 200 
    Q 550 350 800 300 
    L 800 0 
    L 0 0 
    L 0 100 
    Z");
  }
  50% {
    d: path("M 0 100 
    Q 200 150 400 200 
    Q 600 250 800 300 
    L 800 0 
    L 0 0 
    L 0 100 
    Z");
  }
  100% {
    d: path("M 0 100 
    Q 150 350 400 200 
    Q 650 50 800 300 
    L 800 0 
    L 0 0 
    L 0 100 
    Z");
  }
`

const waveAnimation = length => css`
  animation: ${wave} ${length} cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite alternate;
`
export const WaveWrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: -1px;
  z-index: -1;
  transform: matrix(1, 0, 0, -1, 0, 0);
`
export const InnerWave = styled.div`
  position: relative;
  width: 100%;
  bottom: 0;
  z-index: -1;
  svg {
    display: block;
    position: absolute;
    width: 100%;
    height: 5.5rem;
    fill: ${props => (props.top ? props.theme.colors.base.bg : lighten(0.08, props.theme.colors.base.bg))};
    @media (max-width: ${props => props.theme.breakpoints.md}) {
      height: 4.5rem;
    }
  }
  path {
    ${waveAnimation('15s')};
  }
`

// experiment
const sky = keyframes`
0% {
  content: '🌑';
}
12.5% {
  content: '🌒';
}
25% {
  content: '🌓';
}
37.5% {
  content: '🌔';
}
50% {
  content: '🌕';
}
62.5% {
  content: '🌖';
}
75% {
  content: '🌗';
}
87.5% {
  content: '🌘';
}
100% {
  content: '🌑';
}
`

export const skyAnimation = length => css`
  animation: ${sky} ${length} linear infinite alternate;
`
