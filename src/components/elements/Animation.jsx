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

export const Hand = styled.span`
  display: inline-block;
  position: relative;
  margin-left: 10px;
  top: 5px;
  left: -15px;
  transform: rotate(20deg);
  ${handAnimation('15s')};
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
// Wave Animation (bugs)
const waveTop = keyframes`
  0% {
    d: path("M-16,167c93.651-21.807,151.543-33.944,346-37,172.305-2.708,236.819,50.67,491,22l2,314-836,2Z");
  }
  50% {
    d: path("M-14,181s132.418-57.008,401-40,267.941,3.586,422-10l12,328-835,2V181Z");
  }
  100% {
    d: path("M-12,246c237.342-51.353,657.948-1.991,829.051-158.021C817,91,815,457,815,457l-826-7S-12.089,276.275-12,246Z");
  }
`

const waveBottom = keyframes`
  0% {
    d: path("M809,134s-79.484-31.938-351,20S208.527,236.684-16,233l4,230,822-2Z");
  }
  50% {
    d: path("M816,229s-128.34-48.234-360-36-267.846,7.574-470-11l7,282,817-3Z");
  }
  100% {
    d: path("M806,309s-208.623,6.977-467-57S148.4,188.3-16,177l1,282,823,1Z");
  }
`

const waveAnimationTop = length => css`
  animation: ${waveTop} ${length} cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite alternate;
`
const waveAnimationBottom = length => css`
  animation: ${waveBottom} ${length} cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite alternate;
`
export const WaveWrapper = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  transform: matrix(4, 0, 0, 1, 0, 0);
`
export const InnerWave = styled.div`
  position: relative;
  width: 100%;
  bottom: 248px;
  z-index: -1;
  svg {
    display: block;
    position: absolute;
    width: 100%;
    height: 250px;
    fill: ${props => (props.top ? props.theme.colors.base.bg : lighten(0.08, props.theme.colors.base.bg))};
    @media (max-width: ${props => props.theme.breakpoints.md}) {
      height: 1rem;
    }
  }
  path {
    ${props => (props.top ? waveAnimationTop('20s') : waveAnimationBottom('20s'))};
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
