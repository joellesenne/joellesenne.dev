/* eslint-disable import/no-unresolved */
import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import CookieConsent from 'react-cookie-consent'
import { lighten } from 'polished'

// config
import theme from 'config/theme'

// Style
import GlobalStyle from 'src/styles/global'

// components
import SEO from '../All/SEO'

// views
import Wrapper from './Wrapper'

const Layout = ({ children, buttonText }) => (
  <ThemeProvider theme={theme}>
    <>
      <SEO />
      <GlobalStyle />
      <Wrapper>{children}</Wrapper>
      <CookieConsent
        buttonText={buttonText}
        style={{
          display: 'block',
          padding: '15px',
          width: '200px',
          maxWidth: '100%',
          left: '20px',
          transform: 'translateY(-20px)',
          textAlign: 'center',
          color: theme.colors.base.color,
          background: lighten(0.08, theme.colors.base.bg),
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.6)',
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
