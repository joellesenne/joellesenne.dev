import React from 'react'
import PropTypes from 'prop-types'

// styled
import { ButtonWrapper, StyledButton } from './StyledButton'

const Button = ({ url, title }) => (
  <ButtonWrapper>
    <StyledButton to={url}>{title}</StyledButton>
  </ButtonWrapper>
)

export default Button

Button.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}
