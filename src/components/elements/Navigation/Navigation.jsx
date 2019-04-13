/* eslint-disable import/no-unresolved */
import React from 'react'

// config
import config from 'config/site'

// icons
import Logo from 'src/medias/icons/Logo'

// Styled
// import { GatsbyLinkNav } from '../Link/StyledLink'
import { Nav, LogoWrapper, LogoText, NavWrapper, NavLink } from './Styled'

const Navigation = () => (
  <Nav calcHeightOnResize disableInlineStyles>
    <LogoWrapper to="/">
      <Logo />
      <LogoText>{config.siteTitle}</LogoText>
    </LogoWrapper>
    <NavWrapper>
      <NavLink to="/projets">Projets</NavLink> <NavLink to="/blog">Blog</NavLink>{' '}
      <NavLink to="/a-propos">A propos</NavLink>
    </NavWrapper>
  </Nav>
)

export default Navigation
