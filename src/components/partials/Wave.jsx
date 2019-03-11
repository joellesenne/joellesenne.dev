/* eslint-disable import/no-unresolved */
import React from 'react'
import PropTypes from 'prop-types'

// elements
import { WaveWrapper, InnerWave } from 'components/elements/Animation'

// components
import { wave } from 'components/SVG'

const AnimationPage = ({ top }) => (
  <WaveWrapper>
    <InnerWave top={top}>
      <svg viewBox={wave.waveBlock.viewBox} preserveAspectRatio={wave.waveBlock.preserveAspectRatio}>
        {wave.waveBlock.shape}
      </svg>
    </InnerWave>
  </WaveWrapper>
)

export default AnimationPage

AnimationPage.propTypes = {
  top: PropTypes.any,
}

AnimationPage.defaultProps = {
  top: false,
}
