import React from 'react'
import kebabCase from 'lodash/kebabCase'
import PropTypes from 'prop-types'

// Styled
import { TagsContainer, TagButton } from './Styled'

const Tags = ({ tags }) => (
  <TagsContainer>
    {tags &&
      tags.map((tag) => (
        <TagButton key={tag} to={`/tag/${kebabCase(tag)}`}>
          {tag}
        </TagButton>
      ))}
  </TagsContainer>
)

export default Tags

Tags.propTypes = {
  tags: PropTypes.array.isRequired,
}
