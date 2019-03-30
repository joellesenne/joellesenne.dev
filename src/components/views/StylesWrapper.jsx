import styled from 'styled-components'

export const StylesWrapper = styled.main`
  margin: 0 auto;
  padding: 2rem 2rem 6rem 2rem;
  max-width: 1200px;
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 1rem 1rem 4rem 1rem;
  }
`
