import { Link } from 'gatsby'
import styled from 'styled-components'
import { darken } from 'polished'

export const TagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 2rem 0;
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
