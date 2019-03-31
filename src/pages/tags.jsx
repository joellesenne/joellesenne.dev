/* eslint-disable import/no-unresolved */
import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import kebabCase from 'lodash/kebabCase'
import size from 'lodash/size'

// config
import config from 'config/site'

// component
import { Wave, Navigation, Button, Line, Header, Bio, Contact, Footer, Layout, Container, Content } from '../components'

// styles
import { ButtonWrapper } from '../components/elements/Button/StyledButton'
import { Number, TagButton } from '../components/elements/Tags/StyledTags'

const tagsPage = ({
  data: {
    allMdx: { group, edges },
  },
}) => (
  <Layout>
    <Helmet title={`Tags | ${config.siteTitle}`} />
    <Header bg title="Tags" subtitle={`${size(edges)} articles divisés en ${size(group)} tags`}>
      <Navigation />
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
        <Line />
        <Button url="/categories" title="Voir les catégories" />
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
