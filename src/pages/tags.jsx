/* eslint-disable react/prop-types */
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
import { ButtonWrapper } from '../components/elements/Button/Styled'
import { Number, TagButton } from '../components/elements/Tags/Styled'

const tagsPage = ({
  data: {
    allMdx: { group, nodes },
  },
}) => (
  <Layout>
    <Helmet title={`Tags | ${config.siteTitle}`} />
    <Header bg title="Tags" subtitle={`${size(nodes)} articles divisés en ${size(group)} tags`}>
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
      nodes: PropTypes.array.isRequired,
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
      nodes {
        id
      }
    }
  }
`
