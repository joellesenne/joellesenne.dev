import React from 'react'
import PropTypes from 'prop-types'

// styled
import { GatsbyLinkPrevNext } from '../Link/Styled'
import { Wrapper, Prev, Next } from './Styled'

const PrevNext = ({ next, prev }) => (
  <Wrapper>
    {prev && (
      <Prev>
        <span>← Précédente</span>
        <GatsbyLinkPrevNext to={prev.fields.slug} rel="prev">
          {prev.frontmatter.title}
        </GatsbyLinkPrevNext>
      </Prev>
    )}

    {next && (
      <Next>
        <span>Suivant →</span>
        <GatsbyLinkPrevNext to={next.fields.slug} rel="next">
          {next.frontmatter.title}
        </GatsbyLinkPrevNext>
      </Next>
    )}
  </Wrapper>
)

export default PrevNext

PrevNext.propTypes = {
  next: PropTypes.object,
  prev: PropTypes.object,
}

PrevNext.defaultProps = {
  next: null,
  prev: null,
}
