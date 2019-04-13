import React from 'react'
import PropTypes from 'prop-types'

// styled
import { StyledBlob } from './Styled'

// svg
import { SVG } from './SVG'

const Blob = ({ positionTop, animationDelay, svgBlob, svgFill }) => (
  <StyledBlob positionTop={positionTop} animationDelay={animationDelay}>
    <SVG svgBlob={svgBlob} svgFill={svgFill} />
  </StyledBlob>
)

export default Blob

Blob.propTypes = {
  positionTop: PropTypes.number,
  animationDelay: PropTypes.string,
  svgBlob: PropTypes.string.isRequired,
  svgFill: PropTypes.string.isRequired,
}

Blob.defaultProps = {
  positionTop: '0',
  animationDelay: '0s',
}
