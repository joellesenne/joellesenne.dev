/* eslint-disable import/no-unresolved */
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import kebabCase from 'lodash/kebabCase'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'

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

const Project = ({ pageContext: { slug, prev, next }, data: { mdx: projectNode } }) => {
  const project = projectNode.frontmatter
  const { fluid } = project.cover.childImageSharp

  return (
    <Layout>
      <Header
        title={project.title}
        subtitle={
          <>
            <SVG icon="category" stroke="#a9a9ef" strokeWidth="3" width={14} height={14} />{' '}
            <GatsbyLink to={`/categorie/${kebabCase(project.category)}`}>{project.category}</GatsbyLink>{' '}
            <SVG icon="calendar" stroke="#a9a9ef" strokeWidth="3" width={24} height={24} /> {project.date} —{' '}
            <SVG icon="clock" stroke="#a9a9ef" strokeWidth="3" width={24} height={24} /> {projectNode.timeToRead} min de
            lecture
          </>
        }
      >
        <Navigation />
        <Wave top />
        <ImgFilter>
          <Img fluid={fluid} alt={project.title} />
        </ImgFilter>
      </Header>
      <Container customSEO>
        <Content>
          <SEO postPath={slug} postNode={projectNode} project />
          <Article>
            <PostContent>
              <MDXRenderer>{projectNode.code.body}</MDXRenderer>
            </PostContent>
            <ApplauseButton />
            <SocialShares />
            <Line />
            <Tags tags={project.tags} />
            <Paragraph>
              Merci de votre patience. Voir d'autres articles dans la catégorie{' '}
              <GatsbyLink to={`/categorie/${kebabCase(project.category)}`}>{project.category}</GatsbyLink>
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

export default Project

Project.propTypes = {
  pageContext: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    next: PropTypes.object,
    prev: PropTypes.object,
  }),
  data: PropTypes.shape({
    mdx: PropTypes.object.isRequired,
  }).isRequired,
}

Project.defaultProps = {
  pageContext: PropTypes.shape({
    next: null,
    prev: null,
  }),
}

export const projectQuery = graphql`
  query projectBySlug($slug: String!) {
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
