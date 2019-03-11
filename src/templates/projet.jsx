import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import kebabCase from 'lodash/kebabCase'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'

// views
import { Layout, Container, Content } from '../components/views'

// partials
import { Header, About, Contact, Footer, Wave } from '../components/partials'

// elements
import { Article, PostContent } from '../components/elements/AllArticle'
import { ImgFilter } from '../components/elements/Image'
import { GatsbyLink } from '../components/elements/Link'
import { Line } from '../components/elements/Line'

// components
import SEO from '../components/SEO'
import { Headroom, PrevNext, Tags } from '../components/allPages'

// icons
import SVG from '../components/SVG'

const Project = ({ pageContext: { slug, prev, next }, data: { mdx: projectNode } }) => {
  const project = projectNode.frontmatter
  const { fluid } = project.cover.childImageSharp

  return (
    <Layout>
      <Header
        title={project.title}
        subtitle={
          <>
            Cat: <GatsbyLink to={`/categorie/${kebabCase(project.category)}`}>{project.category}</GatsbyLink>{' '}
            <SVG icon="calendar" stroke="#a9a9ef" strokeWidth="3" width={24} height={24} /> {project.date} —{' '}
            <SVG icon="clock" stroke="#a9a9ef" strokeWidth="3" width={24} height={24} /> {projectNode.timeToRead} min de
            lecture
          </>
        }
      >
        <Headroom />
        <Wave top />
        <ImgFilter>
          <Img fluid={fluid} alt={project.title} />
        </ImgFilter>
      </Header>
      <Container customSEO>
        <Content>
          <SEO postPath={slug} postNode={projectNode} article />
          <Article>
            <PostContent>
              <MDXRenderer>{projectNode.code.body}</MDXRenderer>
            </PostContent>
            <Line />
            <Tags tags={project.tags} />
            <PrevNext prev={prev} next={next} />
          </Article>
        </Content>
        <About />
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
