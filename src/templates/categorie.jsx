/* eslint-disable import/no-unresolved */
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import kebabCase from 'lodash/kebabCase'

// config
import config from 'config/site'

// views
import { Layout, Container, Content } from 'components/views'

// partials
import { Header, Bio, Contact, Footer, Wave } from 'components/partials'

// components
import { Headroom, ItemTagCategory } from 'components/common'

// elements
import { ButtonWrapper, Button } from 'components/elements/Button'
import { GatsbyLink } from 'components/elements/Link'

const categoryPage = ({
  pageContext: { category },
  data: {
    allMdx: { edges, totalCount },
  },
}) => (
  <Layout>
    <Helmet title={`${category} | ${config.siteTitle}`} />
    <Header
      bg
      title={category}
      subtitle={
        <>
          {totalCount} {totalCount === 1 ? 'article trouvé' : 'articles trouvés'} dans la catégorie :{' '}
          <GatsbyLink to={`/categorie/${kebabCase(category)}`}>{category}</GatsbyLink>
        </>
      }
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
          <Button to="/categories">Gatégories</Button>
        </ButtonWrapper>
      </Content>
      <Bio />
      <Contact />
    </Container>
    <Footer />
  </Layout>
)

export default categoryPage

categoryPage.propTypes = {
  pageContext: PropTypes.shape({
    category: PropTypes.string.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    Mdx: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
  }).isRequired,
}

export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMdx(
      filter: { frontmatter: { category: { eq: $category }, publish: { eq: true } } }
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
