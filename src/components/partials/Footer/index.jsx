/* eslint-disable import/no-unresolved */
import React from 'react'

// config
import config from 'config/site'

// utils
import useBuildTime from '../../../hooks/useBuildTime'

// styles
import { Paragraph, Link } from '../../Typographies/StyledTypographies'
import { Footer } from './Styled'

// animation
import Wave from '../../Animation/Wave'

const FooterPages = () => {
  const dateCurent = new Date().getFullYear()
  const buildTime = useBuildTime()

  return (
    <Footer>
      <Paragraph>
        &copy; 2018-{dateCurent} – Tout droits réservés – Mise à jour le {buildTime}
        <br />
        <Link href="/conditions-de-service">Conditions</Link> –{' '}
        <Link href="/politique-de-confidentialite">Confidentialité</Link> –{' '}
        <Link href={`https://github.com/${config.userSlug}/joellesenne.xyz`} target="_blank" rel="noopener noreferrer">
          Code source
        </Link>{' '}
        inspiré par{' '}
        <Link href="https://www.lekoarts.de/" target="_blank" rel="noopener noreferrer">
          LekoArts
        </Link>
      </Paragraph>
      <Wave />
    </Footer>
  )
}

export default FooterPages
