import React from 'react'

// config
import config from '../../../../config/site'

// utils
import useBuildTime from '../../../hooks/useBuildTime'

// styles
import { Paragraph, Link } from '../../Typographies/StyledTypographies'
import { Footer } from './Styled'

// animation
import Wave from '../../Animation/Wave'

const FooterPages = () => {
  const dateCurrent = new Date().getFullYear()
  const buildTime = useBuildTime()

  return (
    <Footer>
      <Paragraph>
        &copy; 2018-{dateCurrent} – Tout droits réservés – Mise à jour le {buildTime}
        <br />
        <Link href="https://joellesenne.dev/conditions-de-service" target="_blank" rel="noopener noreferrer">
          Conditions
        </Link>{' '}
        –{' '}
        <Link href="https://joellesenne.dev/politique-de-confidentialite" target="_blank" rel="noopener noreferrer">
          Confidentialité
        </Link>{' '}
        –{' '}
        <Link href={`https://github.com/${config.userSlug}/joellesenne.dev`} target="_blank" rel="noopener noreferrer">
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
