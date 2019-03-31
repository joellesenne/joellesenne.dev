/* eslint-disable import/no-unresolved */
import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

// config
import config from 'config/site'

const SEO = props => {
  const { postNode, postPath, article, project, page, buildTime } = props

  let title
  let description

  const realPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix
  const homeURL = `${config.siteUrl}${realPrefix}`
  const URL = `${homeURL}${postPath || ''}`
  const image = `${homeURL}${config.siteBanner}`

  if (article || project || page) {
    const postMeta = postNode.frontmatter
    title = `${postMeta.title} | ${config.siteTitle}`
    description = postNode.excerpt
  } else {
    title = config.siteTitleAlt
    description = config.siteDescription
  }

  // schema.org in JsonLD format
  // https://developers.google.com/search/docs/guides/intro-structured-data
  // You can fill out the 'author', 'creator' with more data or another type (e.g. 'Organization')
  const schemaOrgWebPage = {
    '@context': 'http://schema.org',
    '@type': 'WebPage',
    url: URL,
    headline: config.siteHeadline,
    inLanguage: config.siteLang,
    mainEntityOfPage: URL,
    description: config.siteDescription,
    name: config.siteTitle,
    author: {
      '@type': 'Person',
      name: config.author,
    },
    copyrightHolder: {
      '@type': 'Person',
      name: config.author,
    },
    copyrightYear: '2019',
    creator: {
      '@type': 'Person',
      name: config.author,
    },
    publisher: {
      '@type': 'Person',
      name: config.author,
    },
    datePublished: '2019-03-05',
    dateModified: buildTime,
    image: {
      '@type': 'ImageObject',
      url: image,
    },
  }

  // Initial breadcrumb list
  const itemListElement = [
    {
      '@type': 'ListItem',
      item: {
        '@id': homeURL,
        name: 'Joël Lesenne',
      },
      position: 1,
    },
    {
      '@type': 'ListItem',
      item: {
        '@id': `${homeURL}/a-propos`,
        name: 'A propos',
      },
      position: 2,
    },
  ]

  let schemaArticle = null

  if (article) {
    schemaArticle = {
      '@context': 'http://schema.org',
      '@type': 'Article',
      author: {
        '@type': 'Person',
        name: config.author,
      },
      copyrightHolder: {
        '@type': 'Person',
        name: config.author,
      },
      copyrightYear: postNode.parent.birthtime,
      creator: {
        '@type': 'Person',
        name: config.author,
      },
      publisher: {
        '@type': 'Organization',
        name: config.author,
        logo: {
          '@type': 'ImageObject',
          url: `${homeURL}${config.siteLogo}`,
        },
      },
      datePublished: postNode.parent.birthtime,
      dateModified: postNode.parent.mtime,
      description,
      headline: title,
      inLanguage: 'fr',
      url: URL,
      name: title,
      image: {
        '@type': 'ImageObject',
        url: image,
      },
      mainEntityOfPage: URL,
    }
    // Push current blogPost into breadcrumb list
    itemListElement.push({
      '@type': 'ListItem',
      item: {
        '@id': URL,
        name: title,
      },
      position: 3,
    })
  }

  let schemaProject = null

  if (project) {
    schemaProject = {
      '@context': 'http://schema.org',
      '@type': 'Project',
      author: {
        '@type': 'Person',
        name: config.author,
      },
      copyrightHolder: {
        '@type': 'Person',
        name: config.author,
      },
      copyrightYear: postNode.parent.birthtime,
      creator: {
        '@type': 'Person',
        name: config.author,
      },
      publisher: {
        '@type': 'Organization',
        name: config.author,
        logo: {
          '@type': 'ImageObject',
          url: `${homeURL}${config.siteLogo}`,
        },
      },
      datePublished: postNode.parent.birthtime,
      dateModified: postNode.parent.mtime,
      description,
      headline: title,
      inLanguage: 'fr',
      url: URL,
      name: title,
      image: {
        '@type': 'ImageObject',
        url: image,
      },
      mainEntityOfPage: URL,
    }
    // Push current projectPost into breadcrumb list
    itemListElement.push({
      '@type': 'ListItem',
      item: {
        '@id': URL,
        name: title,
      },
      position: 4,
    })
  }

  let schemaPage = null

  if (page) {
    schemaPage = {
      '@context': 'http://schema.org',
      '@type': 'Page',
      author: {
        '@type': 'Person',
        name: config.author,
      },
      copyrightHolder: {
        '@type': 'Person',
        name: config.author,
      },
      copyrightYear: postNode.parent.birthtime,
      creator: {
        '@type': 'Person',
        name: config.author,
      },
      publisher: {
        '@type': 'Organization',
        name: config.author,
        logo: {
          '@type': 'ImageObject',
          url: `${homeURL}${config.siteLogo}`,
        },
      },
      datePublished: postNode.parent.birthtime,
      dateModified: postNode.parent.mtime,
      description,
      headline: title,
      inLanguage: 'fr',
      url: URL,
      name: title,
      image: {
        '@type': 'ImageObject',
        url: image,
      },
      mainEntityOfPage: URL,
    }
    // Push current projectPost into breadcrumb list
    itemListElement.push({
      '@type': 'ListItem',
      item: {
        '@id': URL,
        name: title,
      },
      position: 5,
    })
  }

  const breadcrumb = {
    '@context': 'http://schema.org',
    '@type': 'BreadcrumbList',
    description: 'Breadcrumbs list',
    name: 'Breadcrumbs',
    itemListElement,
  }
  return (
    <Helmet>
      <html lang={config.siteLang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="gatsby-starter" content="Gatsby Starter Portfolio Cara" />
      <link rel="shortcut icon" href="favicon.ico" />
      <meta name="msapplication-TileColor" content={config.backgroundColor} />
      <meta name="msapplication-config" content="browserconfig.xml" />
      <meta name="image" content={image} />
      <meta property="og:locale" content={config.ogLanguage} />
      <meta property="og:site_name" content={config.userSlug} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={description} />
      {config.siteFBAppID && <meta property="fb:app_id" content={config.siteFBAppID} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={config.userName ? config.userName : ''} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={description} />
      <link href="https://fonts.googleapis.com/css?family=Karla:400,700|Spectral:400,500,700,800" rel="stylesheet" />
      {/* Insert schema.org data conditionally (webpage/article || webpage/project) + everytime (breadcrumbs) */}
      {!article && <script type="application/ld+json">{JSON.stringify(schemaOrgWebPage)}</script>}
      {article && <script type="application/ld+json">{JSON.stringify(schemaArticle)}</script>}
      {!project && <script type="application/ld+json">{JSON.stringify(schemaOrgWebPage)}</script>}
      {project && <script type="application/ld+json">{JSON.stringify(schemaProject)}</script>}
      <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
    </Helmet>
  )
}

export default SEO

SEO.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      buildTime: PropTypes.string.isRequired,
    }),
  }).isRequired,
}

// const SEO = props => <StaticQuery query={querySEO} render={data => <Head {...props} data={data} />} />

SEO.propTypes = {
  postNode: PropTypes.object,
  postPath: PropTypes.string,
  article: PropTypes.bool,
  project: PropTypes.bool,
  page: PropTypes.bool,
  buildTime: PropTypes.string,
}

SEO.defaultProps = {
  postNode: null,
  postPath: null,
  article: false,
  project: false,
  page: false,
  buildTime: null,
}

/* const querySEO = graphql`
  query SEO {
    site {
      buildTime(formatString: "YYYY-MM-DD")
    }
  }
` */
