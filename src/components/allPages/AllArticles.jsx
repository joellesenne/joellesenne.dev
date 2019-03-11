/* eslint-disable import/no-unresolved */
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'

// elements
import { Post, Title, Initial, Information, Excerpt } from 'components/elements/ArticleCard'
import { GatsbyLink } from 'components/elements/Link'

// icons
import SVG from 'components/SVG'

const ArticlePage = ({ title, date, excerpt, slug, timeToRead, category }) => {
  const firstChar = title.charAt(0)

  return (
    <Post>
      <Title>
        <Initial>{firstChar}</Initial>
        <Link to={slug}>{title}</Link>
      </Title>
      <Information>
        Cat: <GatsbyLink to={`/categorie/${kebabCase(category)}`}>{category}</GatsbyLink>{' '}
        <SVG icon="calendar" stroke="#a9a9ef" strokeWidth="2" width={14} height={14} /> {date} –{' '}
        <SVG icon="clock" stroke="#a9a9ef" strokeWidth="2" width={14} height={14} /> {timeToRead} min de lecture
      </Information>
      <Excerpt>{excerpt}</Excerpt>
    </Post>
  )
}

export default ArticlePage

ArticlePage.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
}
