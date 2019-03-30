import { keyframes, css } from 'styled-components'

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
