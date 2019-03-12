import { Link } from 'gatsby'
import styled from 'styled-components'
import { lighten, darken } from 'polished'

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 3rem;
`

export const Button = styled(Link)`
  margin-top: 2rem;
  padding: 10px 25px;
  font-size: 20px;
  font-weight: 700;
  color: ${props => props.theme.colors.base.white};
  background-color: ${props => props.theme.colors.link.gradientRight};
  background-image: ${props => props.theme.gradient.btn};
  border-radius: 50px;
  border: 4px solid ${props => lighten(0.08, props.theme.colors.base.bg)};
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  transition: ${props => props.theme.transition.link};
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: 1rem;
  }
  &:hover {
    background-color: ${props => props.theme.colors.link.color};
    box-shadow: 0 0 2px 2px ${props => lighten(0.08, props.theme.colors.base.bg)};
    background: ${props => props.theme.gradient.btn};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
  }
`

export const TagButton = styled(Link)`
  margin-right: 1rem;
  margin-bottom: 1.5rem;
  padding: 0.5rem 0.9rem;
  font-size: 0.9rem;
  font-weight: 700;
  color: ${props => props.theme.colors.base.bg};
  border-radius: 0.6rem;
  background-color: ${props => props.theme.colors.base.color};
  box-shadow: inset 0 0 20px 0 ${props => darken(0.02, props.theme.colors.base.color)};
  transition: ${props => props.theme.transition.link};
  span {
    flex-wrap: nowrap;
  }
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: 0.8rem;
  }
  &:hover {
    background-color: ${props => darken(0.02, props.theme.colors.base.color)};
    box-shadow: 0px 0px 1px 1px ${props => darken(0.02, props.theme.colors.base.color)};
  }
`

export const Number = styled.span`
  margin-left: 0.7rem;
  padding: 0.3rem 0.557rem;
  font-size: 0.8rem;
  color: ${props => props.theme.colors.base.color};
  background-color: ${props => props.theme.colors.base.bg};
  border-radius: 50%;
`
