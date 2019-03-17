/* eslint-disable import/no-unresolved */
import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import kebabCase from 'lodash/kebabCase'
import size from 'lodash/size'

// config
import config from 'config/site'

// elements
import { ButtonWrapper, Button, Number, TagButton } from 'components/elements/Button'

// common
import { Headroom } from 'components/common'

// partials
import { Header, Bio, Contact, Footer, Wave } from 'components/partials'

// views
import { Layout, Container, Content } from 'components/views'

const categoriesPage = ({
  data: {
    allMdx: { group, edges },
  },
}) => (
  <Layout>
    <Helmet title={`Catégories | ${config.siteTitle}`} />
    <Header bg title="Catégories" subtitle={`${size(edges)} articles divisés en ${size(group)} categories`}>
      <Headroom />
      <Wave top />
    </Header>
    <Container>
      <Content>
        <ButtonWrapper>
          {group.map(category => (
            <TagButton key={category.id} to={`/categorie/${kebabCase(category.fieldValue)}`}>
              <span>
                {category.fieldValue} <Number>{category.totalCount}</Number>
              </span>
            </TagButton>
          ))}
        </ButtonWrapper>
        <ButtonWrapper>
          <Button to="/tags">Tags</Button>
        </ButtonWrapper>
      </Content>
      <Bio />
      <Contact />
    </Container>
    <Footer />
  </Layout>
)

export default categoriesPage

categoriesPage.propTypes = {
  data: PropTypes.shape({
    Mdx: PropTypes.shape({
      group: PropTypes.array.isRequired,
      edges: PropTypes.array.isRequired,
    }),
  }).isRequired,
}

export const pageQuery = graphql`
  query CategoriesPage {
    allMdx(
      filter: { fields: { sourceInstanceName: { in: ["blog", "projects"] } }, frontmatter: { publish: { eq: true } } }
    ) {
      group(field: frontmatter___category) {
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
