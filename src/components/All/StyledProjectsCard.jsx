import styled from 'styled-components'
import { Link } from 'gatsby'

export const ProjectsWrapper = styled.section`
  padding: 1rem 0;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  justify-content: space-between;
  @supports (display: grid) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 4rem;
    @media (max-width: ${props => props.theme.breakpoints.lg}) {
      grid-gap: 3rem;
    }
    @media (max-width: 900px) {
      grid-template-columns: 1fr;
      grid-gap: 2rem;
    }
  }
`

export const LinkWrapper = styled(Link)`
  position: relative;
  padding: 2rem;
  width: 100%;
  font-size: #fff;
  background-color: #d4145a;
  background: linear-gradient(to right, #d4145a 0%, #fbb03b 100%);
  box-shadow: rgba(0, 0, 0, 0.11) 0px 15px 30px 0px, rgba(0, 0, 0, 0.08) 0px 5px 15px 0px;
  border-radius: 0.5rem;
  transition: transform 0.4s cubic-bezier(0.6, 4, 0.3, 0.8);
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
  &:nth-last-of-type(1) {
    background: linear-gradient(to right, #662d8c 0%, #ed1e79 100%);
  }
  &:nth-last-of-type(2) {
    background: linear-gradient(to right, #009245 0%, #fcee21 100%);
  }
  &:nth-last-of-type(3) {
    background: linear-gradient(to right, #d585ff 0%, #00ffee 100%);
  }
  &:hover {
    transform: translateY(-5px);
  }
`

export const Title = styled.h2`
  position: relative;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  margin-bottom: 0.75rem;
  a {
    color: grey;
    &:hover {
      color: #fff;
    }
  }
`

export const Excerpt = styled.p`
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  text-shadow: rgba(0, 0, 0, 0.3) 0px 2px 10px;
`
