import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import kebabCase from 'lodash/kebabCase'
import { MDXRenderer } from 'gatsby-plugin-mdx'

// component
import {
  Wave,
  CommentBox,
  Navigation,
  Pagination,
  Line,
  Tags,
  Header,
  Bio,
  Contact,
  Footer,
  Layout,
  Container,
  Content,
} from '../components'

// styles
import { Article, PostContent } from '../components/Post/StyledArticlesProjects'
import { ImgFilter } from '../components/elements/Images/Styled'
import { GatsbyLink } from '../components/elements/Link/Styled'
import { Paragraph } from '../components/Typographies/StyledTypographies'

// icons
import SVG from '../components/Animation/SVG'

// SEO
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
            <SVG icon="clock" stroke="#a9a9ef" strokeWidth="3" width={24} height={24} /> {projectNode.timeToRead} min
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
              <MDXRenderer>{projectNode.body}</MDXRenderer>
            </PostContent>
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
      body
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
