/* eslint-disable import/no-unresolved */
import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import kebabCase from 'lodash/kebabCase'
import size from 'lodash/size'

// config
import config from 'config/site'

// views
import { Layout, Container, Content } from 'components/views'

// partials
import { Header, Bio, Contact, Footer, Wave } from 'components/partials'

// elements
import { ButtonWrapper, Button, Number, TagButton } from 'components/elements/Button'

// components
import { Headroom } from 'components/common'

const tagsPage = ({
  data: {
    allMdx: { group, edges },
  },
}) => (
  <Layout>
    <Helmet title={`Tags | ${config.siteTitle}`} />
    <Header bg title="Tags" subtitle={`${size(edges)} articles divisés en ${size(group)} tags`}>
      <Headroom />
      <Wave top />
    </Header>
    <Container>
      <Content>
        <ButtonWrapper>
          {group.map(tag => (
            <TagButton key={tag.id} to={`/tag/${kebabCase(tag.fieldValue)}`}>
              <span>
                {tag.fieldValue} <Number>{tag.totalCount}</Number>
              </span>
            </TagButton>
          ))}
        </ButtonWrapper>
        <ButtonWrapper>
          <Button to="/categories">Catégories</Button>
        </ButtonWrapper>
      </Content>
      <Bio />
      <Contact />
    </Container>
    <Footer />
  </Layout>
)

export default tagsPage

tagsPage.propTypes = {
  data: PropTypes.shape({
    Mdx: PropTypes.shape({
      group: PropTypes.array.isRequired,
      edges: PropTypes.array.isRequired,
    }),
  }).isRequired,
}

export const pageQuery = graphql`
  query TagsPage {
    allMdx(
      filter: { fields: { sourceInstanceName: { in: ["blog", "projects"] } }, frontmatter: { publish: { eq: true } } }
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
      edges {
        node {
          id
        }
      }
    }
  }
`
