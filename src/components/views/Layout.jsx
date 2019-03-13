/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import CookieConsent from 'react-cookie-consent'
import { lighten } from 'polished'

// config
import theme from 'config/theme'

import GlobalStyle from 'styles/global'

// components
import SEO from 'components/SEO'

// views
import Wrapper from './Wrapper'

// styles

const Layout = ({ children, buttonText }) => (
  <ThemeProvider theme={theme}>
    <>
      <SEO />
      <GlobalStyle />
      <Wrapper>{children}</Wrapper>
      <CookieConsent
        buttonText={buttonText}
        style={{
          padding: '0 1.5rem',
          color: theme.colors.base.color,
          background: lighten(0.08, theme.colors.base.bg),
        }}
        buttonStyle={{
          color: theme.colors.base.bg,
          background: theme.colors.base.color,
          borderRadius: '13px',
        }}
      >
        Ce site utilise des cookies pour améliorer l'expérience utilisateur.
      </CookieConsent>
    </>
  </ThemeProvider>
)

export default Layout

Layout.propTypes = {
  buttonText: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
}

Layout.defaultProps = {
  buttonText: 'J’ai compris',
}
