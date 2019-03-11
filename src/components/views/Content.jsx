import styled from 'styled-components'

const Content = styled.section`
  grid-column: 2;
  box-shadow: 0 4px 120px rgba(0, 0, 0, 0.15);
  border-radius: 1rem;
  padding: 3rem 6rem;
  @media (max-width: ${props => props.theme.breakpoints.xl}) {
    padding: 3rem 4rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 2rem 1.5rem;
  }
  overflow: hidden;
`

export default Content
