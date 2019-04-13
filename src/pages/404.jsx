/* eslint-disable import/no-unresolved */
import React from 'react'
import Helmet from 'react-helmet'

// config
import config from 'config/site'

// components
import { Wave, Navigation, Button, Header, Bio, Contact, Footer, Layout, Container, Content } from '../components'

const NoFoundPage = () => (
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

export default NoFoundPage
