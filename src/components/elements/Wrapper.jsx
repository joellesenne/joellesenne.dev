import styled from 'styled-components'

export const Wrapper = styled.main`
  margin: 0 auto;
  padding: 2rem 2rem 6rem 2rem;
  max-width: 960px;
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 1rem 1rem 4rem 1rem;
  }
`
