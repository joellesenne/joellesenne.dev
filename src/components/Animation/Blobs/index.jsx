import React from 'react'
import PropTypes from 'prop-types'

// styled
import { StyledBlob } from './StyledBlob'

// svg
import SVG from '../SVG'

const Blob = ({ positionTop, animationDelay, svgIcon, svgFill }) => (
  <StyledBlob positionTop={positionTop} animationDelay={animationDelay}>
    <SVG svgIcon={svgIcon} svgFill={svgFill} />
  </StyledBlob>
)

export default Blob

Blob.propTypes = {
  positionTop: PropTypes.number,
  animationDelay: PropTypes.string,
  svgIcon: PropTypes.string.isRequired,
  svgFill: PropTypes.string.isRequired,
}

Blob.defaultProps = {
  positionTop: '0',
  animationDelay: '0s',
}
