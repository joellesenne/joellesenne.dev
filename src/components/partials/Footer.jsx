/* eslint-disable import/no-unresolved */
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

// config
import config from 'config/site'

// elements
import { Footer } from 'components/elements/Footer'
import { Paragraph, Link } from 'components/elements/Typographies'

// partials
import Wave from './Wave'

const useBuildTime = () => {
  const time = useStaticQuery(graphql`
    query {
      site {
        buildTime(formatString: "DD-MM-YYYY")
      }
    }
  `)

  return time.site.buildTime
}

const FooterPages = () => {
  const dateCurrent = new Date().getFullYear()
  const buildTime = useBuildTime()
  return (
    <Footer>
      <Paragraph>
        &copy; 2018-{dateCurrent} par <Link href={`${config.siteUrl}`}>{config.siteTitle}</Link> –{' '}
        <Link href={`https://github.com/${config.userSlug}/joellesenne.xyz`} target="_blank" rel="noopener noreferrer">
          Github Repository
        </Link>
        <br />
        Mise à jour : {buildTime} – inspiré par{' '}
        <Link href="https://www.lekoarts.de/" target="_blank" rel="noopener noreferrer">
          LekoArts
        </Link>
      </Paragraph>
      <Wave />
    </Footer>
  )
}

export default FooterPages
