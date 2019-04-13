import React from 'react'
import PropTypes from 'prop-types'

// styled
import { StyledWaveWrapper, StyledInnerWave } from './Styled'

// icons SVG
import { svg } from './Svg'

const Wave = ({ top }) => (
  <StyledWaveWrapper>
    <StyledInnerWave top={top}>
      <svg
        viewBox={top ? svg.waveBlock.viewBox : svg.waveBlock.viewBox}
        preserveAspectRatio={top ? svg.waveBlock.preserveAspectRatio : svg.waveBlock.preserveAspectRatio}
      >
        {top ? svg.waveBlock.shape : svg.waveBlock.shape}
      </svg>
    </StyledInnerWave>
  </StyledWaveWrapper>
)

export default Wave

Wave.propTypes = {
  top: PropTypes.any,
}

Wave.defaultProps = {
  top: false,
}
