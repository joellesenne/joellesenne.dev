/* eslint-disable import/no-unresolved */
import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import kebabCase from 'lodash/kebabCase'
import size from 'lodash/size'

// config
import config from 'config/site'

// components
import { Wave } from '../components/Animation'
import { Layout, Container, Content } from '../components/views'
import { Header, Bio, Contact, Footer } from '../components/partials'
import { Navigation, Button, Line } from '../components'
import { ButtonWrapper } from '../components/elements/Button/StyledButton'
import { Number, TagButton } from '../components/elements/Tags/StyledTags'

const categoriesPage = ({
  data: {
    allMdx: { group, edges },
  },
}) => (
  <Layout>
    <Helmet title={`Catégories | ${config.siteTitle}`} />
    <Header bg title="Catégories" subtitle={`${size(edges)} articles divisés en ${size(group)} categories`}>
      <Navigation />
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
        <Line />
        <Button url="/tags" title="Voir les tags" />
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
