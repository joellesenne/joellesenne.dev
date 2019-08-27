/* eslint-disable import/no-unresolved */
import React from 'react'

// config
import config from 'config/site'

// elements
import { Title, Paragraph, Link } from '../../Typographies/StyledTypographies'

// views
import { Content } from '../../views'

const SectionPage = () => (
  <Content>
    <Title>Entrer en contact</Title>
    <Paragraph>
      M’écrire pour parler de votre projet <Link href="mailto:contact@joellesenne.dev">contact@joellesenne.dev</Link> ou
      me trouver sur d'autres plateformes :{' '}
      <Link href={`https://dribbble.com/${config.userSlug}`} target="_blank" rel="noopener noreferrer">
        Dribbble
      </Link>{' '}
      <Link href={`https://www.instagram.com/${config.userSlug}`} target="_blank" rel="noopener noreferrer">
        Instagram
      </Link>{' '}
      <Link href={`https://github.com/${config.userSlug}`} target="_blank" rel="noopener noreferrer">
        Github
      </Link>{' '}
      <Link href={`https://codepen.io/${config.userSlug}`} target="_blank" rel="noopener noreferrer">
        Codepen
      </Link>{' '}
      &{' '}
      <Link href={`https://twitter.com/${config.userSlug}`} target="_blank" rel="noopener noreferrer">
        Twitter
      </Link>{' '}
    </Paragraph>
  </Content>
)

export default SectionPage
