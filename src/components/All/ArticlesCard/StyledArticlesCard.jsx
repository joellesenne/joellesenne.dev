import styled from 'styled-components'
import { lighten, darken } from 'polished'

export const Post = styled.article`
  display: flex;
  flex-direction: column;
  margin-top: 3.5rem;
  margin-bottom: 2rem;

  @media (max-width: 600px) {
    margin-top: 2rem;
    margin-bottom: 1.5rem;
  }
`

export const Title = styled.h2`
  position: relative;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  margin-bottom: 0.75rem;
  a {
    color: ${props => darken(0.01, props.theme.colors.base.color)};
    transition: ${props => props.theme.transition.link};
    &:hover {
      color: ${props => lighten(0.1, props.theme.colors.base.color)};
    }
  }
`

export const Initial = styled.span`
  position: absolute;
  font-size: 7rem;
  transform: translate(-50%, -50%);
  opacity: 0.08;
  user-select: none;
`

export const Information = styled.div`
  margin-top: -0.5rem;
  margin-bottom: 0.5rem;
  color: ${props => darken(0.1, props.theme.colors.base.color)};
`

export const IconSvg = styled.img`
  svg {
    stroke: ${props => darken(0.1, props.theme.colors.base.color)};
  }
`

export const Excerpt = styled.p`
  grid-column: -1 / 1;
  margin-top: 1rem;
  margin-bottom: 1rem;
`
