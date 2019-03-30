/* eslint-disable import/no-unresolved */
import React from 'react'
import PropTypes from 'prop-types'

// elements
import { LinkWrapper, Title, Excerpt } from './StyledProjectsCard'

const ArticlePage = ({ title, excerpt, slug }) => (
  <LinkWrapper to={slug}>
    <Excerpt>{excerpt}</Excerpt>
    <Title>{title}</Title>
  </LinkWrapper>
)

export default ArticlePage

ArticlePage.propTypes = {
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
}
