/* eslint-disable import/order */
import styled from 'styled-components'
import { darken } from 'polished'

// animation
import { rotateAnimation } from '../Animation/Animation'

// image
import triangle from '../../medias/images/triangle.svg'

export const BigTitle = styled.h1`
  position: relative;
  margin-top: 2rem;
  margin-bottom: 0;
  font-size: 3rem;
  letter-spacing: 0.05em;
  line-height: 1.2;
  text-shadow: 0 5px 35px rgba(255, 255, 255, 0.15);
  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    margin-bottom: 0.5rem;
    font-size: 2rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 1.5rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    font-size: 1.3rem;
  }
`

export const Subtitle = styled.p`
  max-width: 650px;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${(props) => darken(0.1, props.theme.colors.base.color)};
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
  svg {
    width: 20px;
    height: 20px;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 1.2rem;
    svg {
      width: 12px;
      height: 12px;
    }
  }
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    font-size: 1rem;
  }
`

export const Title = styled.h2`
  position: relative;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    &:before {
      content: url(${triangle});
      position: absolute;
      left: -60px;
      top: 5px;
      width: 40px;
      height: 40px;
      background-size: 40px;
      ${rotateAnimation('4s')};
    }
  }
`

export const Paragraph = styled.p`
  margin-top: 2rem;
`

export const Link = styled.a`
  background: ${(props) => props.theme.gradient.link};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  transition: ${(props) => props.theme.transition.link};
  &:hover {
    border-bottom: 2px solid ${(props) => props.theme.colors.link.gradientLeft};
    -webkit-text-fill-color: ${(props) => props.theme.colors.link.gradientLeft};
  }
`
