/* eslint-disable import/no-unresolved */
import React from 'react'
import Headroom from 'react-headroom'

// config
import config from 'config/site'

// elements
import { Nav, LogoWrapper, LogoText, NavWrapper } from 'components/elements/Navigation'
import { GatsbyLinkNav } from 'components/elements/Link'

// icons
import Logo from 'icons/Logo'

const HeaderPage = () => (
  <>
    <Headroom
      calcHeightOnResize
      disableInlineStyles
      style={{
        backgroundColor: 'rgb(41, 0, 139)',
        boxShadow: '1px 1px 1px rgba(0, 0, 0, 0.25)',
        transition: 'all .5s ease-in-out',
      }}
    >
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
    </Headroom>
  </>
)

export default HeaderPage
