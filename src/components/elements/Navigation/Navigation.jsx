/* eslint-disable import/no-unresolved */
import React from 'react'

// config
import config from 'config/site'

// icons
import Logo from 'src/medias/icons/Logo'

// Styled
import { GatsbyLinkNav } from '../Link/StyledLink'
import { Nav, LogoWrapper, LogoText, NavWrapper } from './StyledNavigation'

const Navigation = () => (
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

export default Navigation
