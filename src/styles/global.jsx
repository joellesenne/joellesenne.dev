import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: inherit;
  }
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    vertical-align: baseline;
  }
  html {
    box-sizing: border-box;
    font-size: 18px;
    line-height: 1.5;
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    h1 {
      font-size: 2.441rem;
    }
    h2 {
      font-size: 1.953rem;
    }
    h3 {
      font-size: 1.563rem;
    }
     h4 {
      font-size: 1.25rem;
    }
    h5 {
      font-size: 1rem;
    }
    @media (max-width: ${props => props.theme.breakpoints.lg}), (max-device-width: ${props =>
  props.theme.breakpoints.lg}) {
      font-size: 18px !important;
      h1 {
        font-size: 2.074rem;
      }
      h2 {
        font-size: 1.728rem;
      }
      h3 {
        font-size: 1.44rem;
      }
      h4 {
        font-size: 1.2rem;
      }
    }
    @media (max-width: ${props => props.theme.breakpoints.sm}), (max-device-width: ${props =>
  props.theme.breakpoints.md}) {
    font-size: 16px !important;
      h1 {
        font-size: 1.602rem;
      }
      h2 {
        font-size: 1.424rem;
      }
      h3 {
        font-size: 1.266rem;
      }
      h4 {
          font-size: 1.125rem;
      }
    }
  }
  body {
    font-family: ${props => props.theme.fontFamily.sansSerif};
    color: ${props => props.theme.colors.base.color};
    background-color: ${props => props.theme.colors.base.bg};
  }
  h1, h2, h3 {
    font-family: ${props => props.theme.fontFamily.serif};
    color: ${props => props.theme.colors.base.white};
  }
  p {
    word-wrap: break-word;
    overflow-wrap: break-word;
    hyphens: auto;
  }
  a {
    text-decoration: none;
    color: ${props => props.theme.colors.link.gradientRight};
  }
  a:hover {
    color: ${props => props.theme.colors.link.gradientLeft};
  }
  img, svg {
    vertical-align: middle;
    max-width: 100%;
  }
  button {
    text-decoration: none;
    text-transform: uppercase;
    outline: none;
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }
  svg:not(:root) {
    overflow: hidden;
    vertical-align: middle;
  }
  [hidden] {
    display: none !important;
  }
  ::-moz-selection {
    color: ${props => props.theme.colors.base.white};
    background-color: ${props => props.theme.colors.link.gradientStart};
  }
  ::selection {
    color: ${props => props.theme.colors.base.white};
    background-color: ${props => props.theme.colors.link.gradientStart};
  }
`

export default GlobalStyle
