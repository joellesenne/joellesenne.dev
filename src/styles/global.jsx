import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
@media (prefers-reduced-motion: reduce) {
  * {
  animation: none;
  }
}
  *, *:before, *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    vertical-align: baseline;
    border: none;
    text-decoration: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
  }
  html, body {
    box-sizing: border-box;
    font-size: 18px;
    line-height: 1.5;
    scrollbar-width: 20px;
    scrollbar-color: ${(props) => props.theme.colors.base.bg};
    overflow-x: hidden;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
    h1 {
      font-size: 2.441rem;
    }
    h2 {
      font-size: 1.953rem;
      line-height: 2.5;
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
    @media (max-width: ${(props) => props.theme.breakpoints.lg}), (max-device-width: ${(props) =>
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
    @media (max-width: ${(props) => props.theme.breakpoints.sm}), (max-device-width: ${(props) =>
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
    font-family: ${(props) => props.theme.fontFamily.sansSerif};
    color: ${(props) => props.theme.colors.base.color};
    background-color: ${(props) => props.theme.colors.base.bg};
  }
  h1, h2, h3 {
    font-family: ${(props) => props.theme.fontFamily.serif};
    color: ${(props) => props.theme.colors.base.white};
  }
  p {
    word-wrap: break-word;
    overflow-wrap: break-word;
    hyphens: auto;
  }
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.link.gradientRight};
  }
  a:hover {
    color: ${(props) => props.theme.colors.link.gradientLeft};
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
  img, svg {
    vertical-align: middle;
    max-width: 100%;
  }
  svg:not(:root) {
    overflow: hidden;
    vertical-align: middle;
  }
  ul, li {
    list-style: none;
  }
  [hidden] {
    display: none !important;
  }
  pre {
  margin-top: 1rem;
    white-space: pre;
    word-wrap: break-word;
    overflow: auto;
  }
  code {
    padding: 2px 8px 4px;
    border-radius: 6px;
    background-color: ${(props) => props.theme.colors.link.gradientLeft};
  }
  ::-moz-selection {
    color: ${(props) => props.theme.colors.base.white};
    background-color: ${(props) => props.theme.colors.link.gradientRight};
  }
  ::selection {
    color: ${(props) => props.theme.colors.base.white};
    background-color: ${(props) => props.theme.colors.link.gradientLeft};
  }
  html::-webkit-scrollbar {
    width: 20px;
    height: 20px
  }
  html::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.base.bg};
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }
  html::-webkit-scrollbar-thumb {
    background-image: linear-gradient(to bottom, #da8725, #da1a60);
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  }
`

export default GlobalStyle
