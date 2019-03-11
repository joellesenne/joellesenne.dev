import React from 'react'
import Helmet from 'react-helmet'

// config
import config from '../../config/site'

// views
import { Layout, Container } from '../components/views'

// partials
import { Header, Contact, Footer, Wave } from '../components/partials'

// components
import { Headroom } from '../components/allPages'

const aboutPage = () => (
  <Layout>
    <Helmet title={`A propos | ${config.siteTitle}`} />
    <Header bg title="A propos" subtitle={`Je m'appel ${config.siteTitle}, je suis Front-End à mon compte`}>
      <Headroom />
      <Wave top />
    </Header>
    <Container>
      <Contact />
    </Container>
    <Footer />
  </Layout>
)

export default aboutPage
