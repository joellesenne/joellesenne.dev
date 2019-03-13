/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import CookieConsent from 'react-cookie-consent'

// config
import theme from 'config/theme'

import GlobalStyle from 'styles/global'

// components
import SEO from 'components/SEO'

// views
import Wrapper from './Wrapper'

// styles

const Layout = ({ children, buttonText, buttonStyle }) => {
  const btnStyle = {
    color: props => props.theme.colors.base.bg,
    background: props => props.theme.colors.base.color,
    borderRadius: '13px',
  }

  return (
    <ThemeProvider theme={theme}>
      <>
        <SEO />
        <GlobalStyle />
        <Wrapper>{children}</Wrapper>
        <CookieConsent
          buttonText={buttonText}
          style={{ background: '#141672', padding: '0 1.5rem' }}
          buttonStyle={(buttonStyle, btnStyle)}
        >
          Ce site utilise des cookies pour améliorer l'expérience utilisateur.
        </CookieConsent>
      </>
    </ThemeProvider>
  )
}

export default Layout

Layout.propTypes = {
  buttonText: PropTypes.string,
  buttonStyle: PropTypes.any.isRequired,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
}

Layout.defaultProps = {
  buttonText: 'J’ai compris',
}
