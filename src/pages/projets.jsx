/* eslint-disable import/no-unresolved */
import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

// config
import config from 'config/site'

// bug
import { ProjectsWrapper } from '../components/All/ProjectsCard/StyledProjectsCard'

// component
import { Wave } from '../components/Animation'
import { Header, Bio, Contact, Footer } from '../components/partials'
import { Navigation } from '../components'
import { Layout, Container, Content } from '../components/views'
import { AllProjects } from '../components/All'

const projectsPage = ({
  data: {
    allMdx: { edges: projectEdges },
  },
}) => (
  <Layout>
    <Helmet title={`Projets | ${config.siteTitle}`} />
    <Header bg title="Projets" subtitle="Un concentré de projets réaliser">
      <Navigation />
      <Wave top />
    </Header>
    <Container>
      <Content>
        <ProjectsWrapper>
          {projectEdges.map(project => (
            <AllProjects
              title={project.node.frontmatter.title}
              date={project.node.frontmatter.date}
              excerpt={project.node.excerpt}
              timeToRead={project.node.timeToRead}
              slug={project.node.fields.slug}
              category={project.node.frontmatter.category}
              key={project.node.fields.slug}
            />
          ))}
        </ProjectsWrapper>
      </Content>
      <Bio />
      <Contact />
    </Container>
    <Footer />
  </Layout>
)

export default projectsPage

projectsPage.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
  }).isRequired,
}

export const PageQuery = graphql`
  query ProjectsQuery {
    allMdx(
      filter: { fields: { sourceInstanceName: { eq: "projects" } }, frontmatter: { publish: { eq: true } } }
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MM/DD/YYYY")
            category
            cover {
              childImageSharp {
                fluid(maxWidth: 800, quality: 90, traceSVG: { color: "#2B2B2F" }) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
          excerpt(pruneLength: 30)
          timeToRead
        }
      }
    }
  }
`
