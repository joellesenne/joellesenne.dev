import styled from 'styled-components'
import { lighten } from 'polished'

export const StyledLine = styled.hr`
  margin-top: 2rem;
  margin-bottom: 1rem;
  width: 100%;
  height: 2px;
  background-color: ${props => lighten(0.08, props.theme.colors.base.bg)};
`
