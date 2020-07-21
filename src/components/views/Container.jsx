import styled from 'styled-components'

const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr minmax(280px, ${(props) => props.theme.maxWidth}) 1fr;
  padding: 0 1rem;
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding: 0;
  }
`

export default Container
