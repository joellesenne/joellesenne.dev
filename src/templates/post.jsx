/* eslint-disable import/no-unresolved */
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import kebabCase from 'lodash/kebabCase'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
// import commentBox from 'commentbox.io'

// components
import { Wave } from '../components/Animation'
import { Layout, Container, Content } from '../components/views'
import { Header, Bio, Contact, Footer } from '../components/partials'
import { Navigation, Pagination, SocialShares, Line, Tags, CommentBox, ApplauseButton } from '../components'
import { Article, PostContent } from '../components/Post/StyledArticlesProjects'
import { ImgFilter } from '../components/elements/Images/StyledImage'
import { GatsbyLink } from '../components/elements/Link/StyledLink'
import { Paragraph } from '../components/Typographies/StyledTypographies'
import SVG from '../components/Animation/SVG'
import SEO from '../components/All/SEO'

const Post = ({ pageContext: { slug, prev, next }, data: { mdx: postNode } }) => {
  const post = postNode.frontmatter
  const { fluid } = post.cover.childImageSharp

  return (
    <Layout>
      <Header
        title={post.title}
        subtitle={
          <>
            <SVG icon="category" stroke="#a9a9ef" strokeWidth="3" width={14} height={14} />{' '}
            <GatsbyLink to={`/categorie/${kebabCase(post.category)}`}>{post.category}</GatsbyLink>{' '}
            <SVG icon="calendar" stroke="#a9a9ef" strokeWidth="3" width={24} height={24} /> {post.date} —{' '}
            <SVG icon="clock" stroke="#a9a9ef" strokeWidth="3" width={24} height={24} /> {postNode.timeToRead} min de
            lecture
          </>
        }
      >
        <Navigation />
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
            <ApplauseButton />
            <SocialShares />
            <Line />
            <Tags tags={post.tags} />
            <Paragraph>
              Merci de votre patience. Voir d'autres articles dans la catégorie{' '}
              <GatsbyLink to={`/categorie/${kebabCase(post.category)}`}>{post.category}</GatsbyLink>
            </Paragraph>
            <Pagination prev={prev} next={next} />
            <CommentBox />
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
