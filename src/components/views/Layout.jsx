/* eslint-disable import/no-unresolved */
import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'

// config
import theme from 'config/theme'

import GlobalStyle from 'styles/global'

// components
import SEO from 'components/SEO'

// views
import Wrapper from './Wrapper'

// styles

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <SEO />
      <GlobalStyle />
      <Wrapper>{children}</Wrapper>
    </>
  </ThemeProvider>
)

export default Layout

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
}
