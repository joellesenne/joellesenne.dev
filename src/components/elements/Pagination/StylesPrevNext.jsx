import styled from 'styled-components'
import { darken } from 'polished'

export const Wrapper = styled.section`
  display: flex;
  margin: 6rem auto 0 auto;
  a {
    display: flex;
    align-items: center;
  }
  justify-items: center;
`

export const Prev = styled.p`
  span {
    text-transform: uppercase;
    font-size: 0.8rem;
    color: ${props => darken(0.1, props.theme.colors.base.color)};
  }
`

export const Next = styled.p`
  margin-left: auto;
  text-align: right;
  span {
    text-transform: uppercase;
    font-size: 0.8rem;
    color: ${props => darken(0.1, props.theme.colors.base.color)};
  }
`
