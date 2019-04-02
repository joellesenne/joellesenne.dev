import styled from 'styled-components'
import Headroom from 'react-headroom'
import { lighten } from 'polished'

// elements
import { GatsbyLinkNav } from '../Link/StyledLink'

export const Nav = styled(Headroom)`
  .headroom-wrapper {
    position: fixed;
    width: 100%;
    z-index: 2000;
  }
  .headroom {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
    padding: 1rem 2rem;
    background: ${props => props.theme.colors.base.bg};
  }
  .headroom--unfixed {
    position: relative;
    transform: translateY(0);
    transition: ${props => props.theme.transition.headroom};
  }
  .headroom--scrolled {
    transition: ${props => props.theme.transition.headroom};
  }
  .headroom--unpinned {
    position: fixed;
    transform: translateY(-100%);
  }
  .headroom--pinned {
    position: fixed;
    background: ${props => lighten(0.08, props.theme.colors.base.bg)};
    box-shadow: 0 5px 30px rgba(0, 0, 0, 0.2);
    transform: translateY(0%);
  }
`

export const LogoWrapper = styled(GatsbyLinkNav)`
  display: flex;
  margin-right: 1rem;
  align-items: center;
  font-weight: 700;
  svg {
    margin-bottom: 0;
    height: 2.5rem;
  }
`

export const LogoText = styled.span`
  margin-left: 0.75rem;
  font-size: 1.25rem;
  text-transform: uppercase;
  background: ${props => props.theme.gradient.link};
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  transition: ${props => props.theme.transition.link};
  &:hover {
    -webkit-text-fill-color: ${props => props.theme.colors.link.gradientLeft};
  }
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: none;
  }
`

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;
  max-width: 15rem;
  a {
    display: flex;
    align-self: center;
    flex-grow: 1;
    background: ${props => props.theme.gradient.link};
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
    z-index: 1;
    transition: ${props => props.theme.transition.link};
    &:hover {
      -webkit-text-fill-color: ${props => props.theme.colors.link.gradientLeft};
    }
  }
`
