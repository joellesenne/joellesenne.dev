import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

// config
import config from '../../config/site'

// bug
import { ProjectsWrapper } from '../components/All/ProjectsCard/StyledProjectsCard'

// component
import { Wave, ProjectsCard, Navigation, Header, Bio, Contact, Footer, Layout, Container, Content } from '../components'

const projectsPage = ({
  data: {
    allMdx: { nodes: projects },
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
          {projects.map(project => (
            <ProjectsCard
              title={project.frontmatter.title}
              date={project.frontmatter.date}
              excerpt={project.excerpt}
              timeToRead={project.timeToRead}
              slug={project.fields.slug}
              category={project.frontmatter.category}
              key={project.fields.slug}
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
      nodes: PropTypes.array.isRequired,
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
      nodes {
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
`
