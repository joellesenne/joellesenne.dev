import React from 'react'
import PropTypes from 'prop-types'

// styled
import { wrapperBTN, linkdBTN } from './Styled'

const Button = ({ url, title }) => (
  <wrapperBTN>
    <linkdBTN to={url}>{title}</linkdBTN>
  </wrapperBTN>
)

export default Button

Button.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}
