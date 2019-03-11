/* eslint-disable import/no-unresolved */
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'
import upperFirst from 'lodash/upperFirst'

// elements
import { Post, Title, Information, Excerpt } from 'components/elements/ArticleCard'
import { GatsbyLink } from 'components/elements/Link'

// icons
import SVG from 'components/SVG'

// component
import Tags from './Tags'

const ItemTagCategory = ({ type, category, path, title, date, timeToRead, tags, excerpt }) => {
  const typeName = `${upperFirst(type) === 'Projects' ? 'Projets' : upperFirst(type)}`
  return (
    <Post>
      <Title>
        <Link to={path}>{title}</Link>
      </Title>
      <Information>
        {typeName} — <SVG icon="calendar" stroke="#a9a9ef" strokeWidth="2" width={15} height={15} /> {date} —{' '}
        <SVG icon="calendar" stroke="#a9a9ef" strokeWidth="2" width={15} height={15} /> {timeToRead} min de lecture.{' '}
        Cat: <GatsbyLink to={`/categorie/${kebabCase(category)}`}>{category}</GatsbyLink>
      </Information>
      <Excerpt>{excerpt}</Excerpt>
      <Tags tags={tags} />
    </Post>
  )
}

export default ItemTagCategory

ItemTagCategory.propTypes = {
  type: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  excerpt: PropTypes.string.isRequired,
}
