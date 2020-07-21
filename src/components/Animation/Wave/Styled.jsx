import styled, { keyframes, css } from 'styled-components'
import { lighten } from 'polished'

const waveBlock = keyframes`
  0% {
    d: path("M809,134s-79.484-31.938-351,20S208.527,236.684-16,233l4,230,822-2Z");
  }
  50% {
    d: path("M816,229s-128.34-48.234-360-36-267.846,7.574-470-11l7,282,817-3Z");
  }
  100% {
    d: path("M806,309s-208.623,6.977-467-57S148.4,188.3-16,177l1,282,823,1Z");
  }
`

const waveAnimationBlock = (length) => css`
  animation: ${waveBlock} ${length} cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite alternate;
`

export const StyledWaveWrapper = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  transform: matrix(3.5, 0, 0, 1, 0, 0);
  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    display: none;
  }
`
export const StyledInnerWave = styled.div`
  position: relative;
  width: 100%;
  bottom: 200px;
  z-index: -1;
  svg {
    display: block;
    position: absolute;
    width: 100%;
    height: 200px;
    fill: ${(props) => (props.top ? props.theme.colors.base.bg : lighten(0.08, props.theme.colors.base.bg))};
    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      height: 200px;
    }
  }
  path {
    ${waveAnimationBlock('25s')}
  }
`
