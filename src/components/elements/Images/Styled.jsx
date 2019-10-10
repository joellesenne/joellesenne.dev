import styled from 'styled-components'

export const ImgFilter = styled.div`
  .gatsby-image-wrapper {
    position: relative;
    height: 350px;
    // filter: grayscale(25%) saturate(155%) opacity(1);
    z-index: -10;
    @media (max-width: ${props => props.theme.breakpoints.lg}) {
      height: 310px;
    }
    @media (max-width: ${props => props.theme.breakpoints.md}) {
      height: 240px;
    }
    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: ${props => props.theme.gradient.rightToLeft};
      mix-blend-mode: color-dodge;
    }
    &:after {
      content: '';
      position: absolute;
      backface-visibility: hidden;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: ${props => props.theme.gradient.bg};
      background-image: radial-gradient(
        ellipse closest-side,
        rgba(15, 14, 22, 0.75),
        ${props => props.theme.gradient.bg}
      );
      background-size: cover;
      background-repeat: no-repeat;
      opacity: 1;
    }
  }
`
