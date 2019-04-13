import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 150px auto;
  align-items: center;
  justify-content: center;
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`
export const Col = styled.div`
  grid-column: auto;
`
export const Items = styled.ul`
  font-size: 1.35rem;
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: 1.15rem;
  }
`

export const Item = styled.li`
  margin: 0.5rem 0;
  transform: translateX(-1rem);
`

export const Icon = styled.span`
  margin-right: 1rem;
`
