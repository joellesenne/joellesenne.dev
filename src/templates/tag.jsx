import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'

// config
import config from '../../config/site'

// views
import { Layout, Container, Content } from '../components/views'

// partials
import { Header, About, Contact, Footer, Wave } from '../components/partials'

// components
import { Headroom, ItemTagCategory } from '../components/allPages'

// elements
import { ButtonWrapper, Button } from '../components/elements/Button'

const tagPage = ({
  pageContext: { tag },
  data: {
    allMdx: { edges, totalCount },
  },
}) => (
  <Layout>
    <Helmet title={`${tag} | ${config.siteTitle}`} />
    <Header
      bg
      title={tag}
      subtitle={`${totalCount} ${totalCount === 1 ? 'article trouvé' : 'articles trouvés'} pour la catégorie tag.`}
    >
      <Headroom />
      <Wave top />
    </Header>
    <Container>
      <Content>
        {edges.map(edge => (
          <ItemTagCategory
            type={edge.node.fields.sourceInstanceName}
            key={edge.node.frontmatter.title}
            title={edge.node.frontmatter.title}
            category={edge.node.frontmatter.category}
            path={edge.node.fields.slug}
            date={edge.node.frontmatter.date}
            timeToRead={edge.node.timeToRead}
            tags={edge.node.frontmatter.tags}
            excerpt={edge.node.excerpt}
          />
        ))}
        <ButtonWrapper>
          <Link to="/tags">
            <Button type="button">Tags</Button>
          </Link>
        </ButtonWrapper>
      </Content>
      <About />
      <Contact />
    </Container>
    <Footer />
  </Layout>
)

export default tagPage

tagPage.propTypes = {
  pageContext: PropTypes.shape({
    tags: PropTypes.string.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    Mdx: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
  }).isRequired,
}

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMdx(
      filter: { frontmatter: { tags: { eq: $tag }, publish: { eq: true } } }
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          fields {
            sourceInstanceName
            slug
          }
          excerpt(pruneLength: 300)
          timeToRead
          frontmatter {
            title
            tags
            date(formatString: "DD/MM/YYYY")
            category
          }
        }
      }
    }
  }
`
