import styled from 'styled-components'

const Heros = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
  margin-bottom: 7rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  max-width: 800px;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    margin-bottom: 5rem;
    padding: 0;
  }
`

export default Heros
