/* eslint-disable import/no-unresolved */
import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

// config
import config from 'config/site'

// components
import { Wave, ArticlesCard, Navigation, Header, Bio, Contact, Footer, Layout, Container, Content } from '../components'

const blogPage = ({
  data: {
    allMdx: { nodes: posts },
  },
}) => (
  <Layout>
    <Helmet title={`Blog | ${config.siteTitle}`} />
    <Header bg title="Blog" subtitle="Un concentré de réflextion, de tutoriels et de nouvelles">
      <Navigation />
      <Wave top Wave />
    </Header>
    <Container>
      <Content>
        {posts.map((post) => (
          <ArticlesCard
            title={post.frontmatter.title}
            date={post.frontmatter.date}
            excerpt={post.excerpt}
            timeToRead={post.timeToRead}
            slug={post.fields.slug}
            category={post.frontmatter.category}
            key={post.fields.slug}
          />
        ))}
      </Content>
      <Bio />
      <Contact />
    </Container>
    <Footer />
  </Layout>
)

export default blogPage

blogPage.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      nodes: PropTypes.array.isRequired,
    }),
  }).isRequired,
}

export const PageQuery = graphql`
  query BlogQuery {
    allMdx(
      filter: { fields: { sourceInstanceName: { eq: "blog" } }, frontmatter: { publish: { eq: true } } }
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "MM/DD/YYYY")
          category
          cover {
            childImageSharp {
              fluid(maxWidth: 800, quality: 90, traceSVG: { color: "#2B2B2F" }) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
        excerpt(pruneLength: 200)
        timeToRead
      }
    }
  }
`
