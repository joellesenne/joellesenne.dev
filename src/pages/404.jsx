import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'

// config
import config from '../../config/site'

// views
import { Layout, Container, Content } from '../components/views'

// partials
import { Header, Contact, Footer, Wave } from '../components/partials'

// components
import { Headroom } from '../components/allPages'

const aboutPage = () => (
  <Layout>
    <Helmet title={`404: pas trouvé | ${config.siteTitle}`} />
    <Headroom />
    <Header bg title="404: pas trouvé" subtitle="vous venez de frapper un itinéraire qui n'éxiste pas !">
      <Wave top />
    </Header>
    <Container>
        <Content>
        <Link to="/">Retour à l'acceuil</Link>
        </Content>
      <Contact />
    </Container>
    <Footer />
  </Layout>
)

export default aboutPage
