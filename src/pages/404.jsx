/* eslint-disable import/no-unresolved */
import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'

// config
import config from 'config/site'

// components
import { Wave } from '../components/Animation'
import { Navigation, Button } from '../components'
import { Header, Bio, Contact, Footer } from '../components/partials'
import { Layout, Container, Content } from '../components/views'

const aboutPage = () => (
  <Layout>
    <Helmet title={`404: pas trouvé | ${config.siteTitle}`} />
    <Header bg title="404: pas trouvé" subtitle="vous venez de frapper un itinéraire qui n'éxiste pas !">
      <Navigation />
      <Wave top />
    </Header>
    <Container>
      <Content>
        <Button url="/" title="Retour à l'acceuil" />
      </Content>
      <Bio />
      <Contact />
    </Container>
    <Footer />
  </Layout>
)

export default aboutPage
