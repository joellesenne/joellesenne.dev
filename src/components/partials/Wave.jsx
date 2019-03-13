/* eslint-disable import/no-unresolved */
/* eslint react/prefer-stateless-function: 0 */
import React from 'react'
import PropTypes from 'prop-types'

// elements
import { WaveWrapper, InnerWave } from 'components/elements/Animation'

// components
import { wave } from 'components/SVG'

const AnimationPage = ({ top }) => (
  <WaveWrapper>
    <InnerWave top={top}>
      <svg
        viewBox={top ? wave.waveTop.viewBox : wave.waveBottom.viewBox}
        preserveAspectRatio={top ? wave.waveBottom.preserveAspectRatio : wave.waveBottom.preserveAspectRatio}
      >
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
