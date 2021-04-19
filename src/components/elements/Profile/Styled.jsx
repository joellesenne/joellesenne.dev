import styled from 'styled-components'

export const StyledProfile = styled.img`
  width: 12rem;
  height: auto;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.11) 0px 15px 30px 0px, rgba(0, 0, 0, 0.08) 0px 5px 15px 0px;
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 8rem;
  }
`
