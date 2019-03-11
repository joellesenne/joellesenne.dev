/* eslint-disable import/no-unresolved */
import React from 'react'

// config
import config from 'config/site'

// elements
import { Nav, LogoWrapper, LogoText, NavWrapper } from 'components/elements/Navigation'
import { GatsbyLinkNav } from 'components/elements/Link'

// icons
import Logo from 'icons/Logo'

const IndexNav = () => (
  <Nav calcHeightOnResize disableInlineStyles>
    <LogoWrapper to="/">
      <Logo />
      <LogoText>{config.siteTitle}</LogoText>
    </LogoWrapper>
    <NavWrapper>
      <GatsbyLinkNav to="/projets">Projets</GatsbyLinkNav> <GatsbyLinkNav to="/blog">Blog</GatsbyLinkNav>{' '}
      <GatsbyLinkNav to="/a-propos">A propos</GatsbyLinkNav>
    </NavWrapper>
  </Nav>
)

export default IndexNav
