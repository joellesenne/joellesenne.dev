import React from 'react'
import Headroom from 'react-headroom'

// component
import Navigation from './Navigation'

const HeaderPage = () => (
  <Headroom
    calcHeightOnResize
    disableInlineStyles
    style={{
      backgroundColor: 'rgb(41, 0, 139)',
      boxShadow: '1px 1px 1px rgba(0, 0, 0, 0.25)',
      transition: 'all .5s ease-in-out',
    }}
  >
    <Navigation />
  </Headroom>
)

export default HeaderPage
