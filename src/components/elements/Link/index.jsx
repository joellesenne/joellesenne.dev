import React from 'react'
import PropTypes from 'prop-types'

import { StyledLink } from './StyledLink'

const Link = ({ url, title }) => <StyledLink to={url}>{title}</StyledLink>

export default Link

Link.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}
