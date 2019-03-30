/* eslint-disable import/no-unresolved */
/* eslint react/prefer-stateless-function: 0 */
import React from 'react'
import PropTypes from 'prop-types'

// styled
import { WaveWrapper, InnerWave } from 'components/All/Animation'

// components
import { wave } from 'components/SVG'

const AnimationPage = ({ top }) => (
  <WaveWrapper>
    <InnerWave top={top}>
      <svg
        viewBox={top ? wave.waveBlock.viewBox : wave.waveBlock.viewBox}
        preserveAspectRatio={top ? wave.waveBlock.preserveAspectRatio : wave.waveBlock.preserveAspectRatio}
      >
        {top ? wave.waveBlock.shape : wave.waveBlock.shape}
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
