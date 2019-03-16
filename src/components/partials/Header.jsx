/* eslint-disable import/no-unresolved */
import React from 'react'
import PropTypes from 'prop-types'

// elements
import { Header, Heros } from 'components/elements/Header'
import { BigTitle, Subtitle } from 'components/elements/Typographies'

const HeaderPage = ({ title, subtitle, children, big, bg }) => (
  <Header big={big} bg={bg}>
    <Heros>
      <BigTitle>{title}</BigTitle>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </Heros>
    {children}
  </Header>
)

export default HeaderPage

HeaderPage.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  subtitle: PropTypes.any,
  children: PropTypes.any,
  big: PropTypes.bool,
  bg: PropTypes.bool,
}

HeaderPage.defaultProps = {
  subtitle: false,
  children: false,
  big: false,
  bg: false,
}
