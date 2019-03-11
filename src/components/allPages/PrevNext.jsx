import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// elements
import { GatsbyLink } from '../elements/Link'

const Wrapper = styled.div`
  display: flex;
  margin: 6rem auto 0 auto;
  a {
    display: flex;
    align-items: center;
  }
  justify-items: center;
`

const Prev = styled.div`
  span {
    text-transform: uppercase;
    font-size: 0.8rem;
    color: grey;
  }
`

const Next = styled.div`
  margin-left: auto;
  text-align: right;
  span {
    text-transform: uppercase;
    font-size: 0.8rem;
    color: grey;
  }
`

const PrevNext = ({ next, prev }) => (
  <Wrapper>
    {prev && (
      <Prev>
        <span>Previous</span>
        <GatsbyLink to={prev.fields.slug}>{prev.frontmatter.title}</GatsbyLink>
      </Prev>
    )}

    {next && (
      <Next>
        <span>Next</span>
        <GatsbyLink to={next.fields.slug}>{next.frontmatter.title}</GatsbyLink>
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
