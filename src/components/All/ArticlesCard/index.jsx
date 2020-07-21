import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'

// elements
import { GatsbyLink } from '../../elements/Link/Styled'

// icons
import SVG from '../../Animation/SVG'

// Styles
import { Post, Title, Initial, Information, Excerpt } from './StyledArticlesCard'

const ArticlePage = ({ title, date, excerpt, slug, timeToRead, category }) => {
  const firstChar = title.charAt(0)

  return (
    <Post>
      <Title>
        <Initial>{firstChar}</Initial>
        <Link to={slug}>{title}</Link>
      </Title>
      <Information>
        <SVG icon="category" stroke="#a9a9ef" strokeWidth="2" width={14} height={14} />{' '}
        <GatsbyLink to={`/categorie/${kebabCase(category)}`}>{category}</GatsbyLink>–{' '}
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
