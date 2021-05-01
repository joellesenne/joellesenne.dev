import React from 'react'
import PropTypes from 'prop-types'

// styled
import { Wrapperbtn, Linkdbtn } from './Styled'

const Button = ({ url, title }) => (
  <Wrapperbtn>
    <Linkdbtn to={url}>{title}</Linkdbtn>
  </Wrapperbtn>
)

export default Button

Button.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}
