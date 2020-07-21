import styled, { keyframes, css } from 'styled-components'

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

export const blobAnimation = (length) => css`
  animation: ${move} ${length} ease-in-out infinite alternate;
`

const moveBlob = () => css`
  position: absolute;
  left: 0;
  width: 25vmax;
  z-index: -1;
  ${blobAnimation('20s')};
  transform-origin: 50% 50%;
  transform-box: fill-box;
`

export const StyledBlob = styled.div`
  top: ${(props) => props.positionTop};
  ${moveBlob}
  animation-delay: ${(props) => props.animatioDelay}
`

export const BlobHeader = styled.div`
  top: 0;
  ${StyledBlob};
`

export const BlobProjects = styled.div`
  top: 600px;
  ${StyledBlob};
  animation-delay: -3s;
`

export const BlobBlog = styled.div`
  top: 1200px;
  ${StyledBlob};
  animation-delay: -9s;
`

export const BlobAbout = styled.div`
  top: 1800px;
  ${StyledBlob};
  animation-delay: -6s;
`
