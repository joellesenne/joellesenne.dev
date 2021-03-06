import styled from 'styled-components'
import { lighten } from 'polished'

export const Pages = styled.article`
  margin-top: 2rem;
  padding: 2rem 4.5rem;
  max-width: 960px;
  z-index: 9000;
  grid-column: 2;
  background-color: ${(props) => lighten(0.08, props.theme.colors.base.bg)};
  box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding: 1rem;
  }
`

export const PageContent = styled.section`
  margin-top: 4rem;
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    margin-top: 1rem;
  }
  blockquote {
    margin-left: 1rem;
    margin-right: 1rem;
    padding: 0 1rem 0;
    border-left: 3px solid ${(props) => props.theme.colors.base.gradientRight};
  }
  h2 {
    & a {
      display: none;
    }
  }
  p {
    font-size: 1.1rem;
    letter-spacing: -0.003em;
    line-height: 1.58;
    --baseline-multiplier: 0.179;
    --x-height-multiplier: 0.35;
    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      margin-top: 1rem;
      font-size: 1rem;
    }
  }
  .prism-code {
    padding: 0.75rem;
    border-radius: 5px;
    margin-bottom: 1rem;
    font-size: 16px;
  }
  a {
    background: ${(props) => props.theme.gradient.link};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
    transition: all 0.35s ease-in-out;
    &:hover {
      -webkit-text-fill-color: ${(props) => props.theme.colors.link.gradientLeft};
      border-bottom: 2px solid ${(props) => props.theme.colors.link.gradientLeft};
    }
  }
`

export const Title = styled.h1`
  margin-bottom: 1rem;
`
