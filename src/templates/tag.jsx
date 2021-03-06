import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import kebabCase from 'lodash/kebabCase'

// config
import config from '../../config/site'

// component
import {
  Wave,
  TagCategory,
  Navigation,
  Button,
  Line,
  Header,
  Bio,
  Contact,
  Footer,
  Layout,
  Container,
  Content,
} from '../components'

// styles
import { GatsbyLink } from '../components/elements/Link/Styled'

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
      subtitle={
        <>
          {totalCount} {totalCount === 1 ? 'article trouvé' : 'articles trouvés'} dans le tag :{' '}
          <GatsbyLink to={`/tag/${kebabCase(tag)}`}>{tag}</GatsbyLink>
        </>
      }
    >
      <Navigation />
      <Wave top />
    </Header>
    <Container>
      <Content>
        {edges.map((edge) => (
          <TagCategory
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
        <Line />
        <Button url="/tags" title="Tous les Tags" />
      </Content>
      <Bio />
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
