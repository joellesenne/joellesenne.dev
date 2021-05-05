import { Link } from 'gatsby'
import styled, {keyframes} from 'styled-components'
import { lighten } from 'polished'

export const Wrapperbtn = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`
export const rainbow = keyframes`
  0% { 
    background-position: 0% 50%; 
  }
  100% { 
    background-position: 100% 50%; 
    
  }
`

export const Linkdbtn = styled(Link)`
  margin-top: 2rem;
  padding: 10px 25px;
  font-size: 20px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.base.white};
  background-color: ${(props) => props.theme.colors.link.gradientRight};
  background-image: ${(props) => props.theme.gradient.btn};
  background-size: 1200% 1200%;
  background-position: 2% 80%;
  border-radius: 50px;
  border: 4px solid ${(props) => lighten(0.2, props.theme.colors.base.bg)};
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  transition: ${(props) => props.theme.transition.link};
  animation: ${ rainbow } 4s ease-out alternate infinite;
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 1rem;
  }
  &:hover {
    box-shadow: 0 0 2px 2px ${(props) => lighten(0.1, props.theme.colors.base.bg)};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    
    
  }
  &:focus {
  background-color: ${(props) => props.theme.colors.link.bg};
  background-image: ${(props) => props.theme.gradient.btn};
  }
`
