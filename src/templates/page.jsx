/* eslint-disable import/no-unresolved */
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'

// config
import config from 'config/site'

// component
import {
  Wave,
  ApplauseButton,
  Navigation,
  Line,
  SocialShares,
  Header,
  Bio,
  Contact,
  Footer,
  Layout,
  Container,
  Content,
} from '../components'

// styles
import { Paragraph } from '../components/Typographies/StyledTypographies'
import { Pages, PageContent } from '../components/All/Pages/StyledPages'
import { ImgFilter } from '../components/elements/Images/Styled'
import SEO from '../components/All/SEO'

const Page = ({ pageContext: { slug }, data: { mdx: pageNode } }) => {
  const page = pageNode.frontmatter
  const { fluid } = page.cover.childImageSharp

  return (
    <Layout>
      <Header title={page.title} subtitle={config.siteDescription}>
        <Navigation />
        <Wave top />
        <ImgFilter>
          <Img fluid={fluid} alt={page.title} />
        </ImgFilter>
      </Header>
      <Container customSEO>
        <Content>
          <SEO postPath={slug} postNode={pageNode} page />
          <Pages>
            <PageContent>
              <MDXRenderer>{pageNode.code.body}</MDXRenderer>
            </PageContent>
            <ApplauseButton />
            <SocialShares />
            <Line />
            <Paragraph>Merci de votre patience.</Paragraph>
          </Pages>
        </Content>
        <Bio />
        <Contact />
      </Container>
      <Footer />
    </Layout>
  )
}

export default Page

Page.propTypes = {
  pageContext: PropTypes.shape({
    slug: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    mdx: PropTypes.object.isRequired,
  }).isRequired,
}

Page.defaultProps = {
  pageContext: PropTypes.shape({
    next: null,
    prev: null,
  }),
}

export const postQuery = graphql`
  query pageBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      code {
        body
      }
      excerpt
      frontmatter {
        title
        cover {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 90, duotone: { highlight: "#30d148", shadow: "#333438" }) {
              ...GatsbyImageSharpFluid_withWebp
            }
            resize(width: 1200, quality: 90) {
              src
            }
          }
        }
      }
      parent {
        ... on File {
          mtime
          birthtime
        }
      }
      fields {
        slug
      }
    }
  }
`
