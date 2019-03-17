/* eslint-disable import/no-unresolved */
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import kebabCase from 'lodash/kebabCase'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'

// elements
import { Article, PostContent } from 'components/elements/AllArticlesProjects'
import { ImgFilter } from 'components/elements/Image'
import { GatsbyLink } from 'components/elements/Link'
import { Line } from 'components/elements/Line'

// partials
import { Header, Bio, Contact, Footer, Wave } from 'components/partials'

// common
import { Headroom, PrevNext, Tags } from 'components/common'

// components
import SEO from 'components/SEO'

// views
import { Layout, Container, Content } from 'components/views'

// icons
import SVG from 'components/SVG'

const Post = ({ pageContext: { slug, prev, next }, data: { mdx: postNode } }) => {
  const post = postNode.frontmatter
  const { fluid } = post.cover.childImageSharp

  return (
    <Layout>
      <Header
        title={post.title}
        subtitle={
          <>
            Cat: <GatsbyLink to={`/categorie/${kebabCase(post.category)}`}>{post.category}</GatsbyLink>{' '}
            <SVG icon="calendar" stroke="#a9a9ef" strokeWidth="3" width={24} height={24} /> {post.date} —{' '}
            <SVG icon="clock" stroke="#a9a9ef" strokeWidth="3" width={24} height={24} /> {postNode.timeToRead} min de
            lecture
          </>
        }
      >
        <Headroom />
        <Wave top />
        <ImgFilter>
          <Img fluid={fluid} alt={post.title} />
        </ImgFilter>
      </Header>
      <Container customSEO>
        <Content>
          <SEO postPath={slug} postNode={postNode} article />
          <Article>
            <PostContent>
              <MDXRenderer>{postNode.code.body}</MDXRenderer>
            </PostContent>
            <Line />
            <Tags tags={post.tags} />
            <PrevNext prev={prev} next={next} />
          </Article>
        </Content>
        <Bio />
        <Contact />
      </Container>
      <Footer />
    </Layout>
  )
}

export default Post

Post.propTypes = {
  pageContext: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    next: PropTypes.object,
    prev: PropTypes.object,
  }),
  data: PropTypes.shape({
    mdx: PropTypes.object.isRequired,
  }).isRequired,
}

Post.defaultProps = {
  pageContext: PropTypes.shape({
    next: null,
    prev: null,
  }),
}

export const postQuery = graphql`
  query postBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      code {
        body
      }
      excerpt
      frontmatter {
        title
        date(formatString: "DD/MM/YYYY")
        category
        tags
        cover {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 90, duotone: { highlight: "#30d148", shadow: "#333438" }) {
              ...GatsbyImageSharpFluid_withWebp
            }
            resize(width: 1200, quality: 90) {
              src
            }
          }
        }
      }
      timeToRead
      parent {
        ... on File {
          mtime
          birthtime
        }
      }
      fields {
        slug
        sourceInstanceName
      }
    }
  }
`
