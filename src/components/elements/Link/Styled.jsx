import { Link } from 'gatsby'
import styled from 'styled-components'

export const StyledLink = styled(Link)`
  margin-right: 0.5rem;
  padding: 2px 0;
  background: ${props => props.theme.gradient.link};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  transition: ${props => props.theme.transition.link};
  &:hover {
    border-bottom: 2px solid ${props => props.theme.colors.link.gradientLeft};
    -webkit-text-fill-color: ${props => props.theme.colors.link.gradientLeft};
  }
`

export const GatsbyLink = styled(Link)`
  margin-right: 0.5rem;
  padding: 2px 0;
  background: ${props => props.theme.gradient.link};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  transition: ${props => props.theme.transition.link};
  &:hover {
    border-bottom: 2px solid ${props => props.theme.colors.link.gradientLeft};
    -webkit-text-fill-color: ${props => props.theme.colors.link.gradientLeft};
  }
`

export const GatsbyLinkNav = styled(GatsbyLink)`
  margin: 0;
  padding: 0;
  &:hover {
    border: none;
  }
`

export const GatsbyLinkPrevNext = styled(GatsbyLink)`
  margin-right: 0;
  &:hover {
    border: 0;
  }
`
