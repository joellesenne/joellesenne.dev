/* eslint-disable import/no-unresolved */
import React from 'react'
import kebabCase from 'lodash/kebabCase'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

// elements
import { TagsContainer } from 'components/elements/Tags'
import { TagButton } from 'components/elements/Button'

const Tags = ({ tags }) => (
  <TagsContainer>
    {tags &&
      tags.map(tag => (
        <TagButton>
          <Link key={tag} to={`/tag/${kebabCase(tag)}`}>
            <span>{tag}</span>
          </Link>
        </TagButton>
      ))}
  </TagsContainer>
)

export default Tags

Tags.propTypes = {
  tags: PropTypes.array.isRequired,
}
