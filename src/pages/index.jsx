import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'

// config
import config from '../../config/site'

// elements
import { Title } from '../components/elements/Typographies'
import { ButtonWrapper, Button } from '../components/elements/Button'
import { ProjectsWrapper } from '../components/elements/ProjectCard'

// views
import { Layout, Container, Content, BlobAnimation } from '../components/views'

// partials
import { Header, About, Contact, Footer } from '../components/partials'

// components
import { AllArticles, AllProjects } from '../components/allPages'

// animation
import { Hand } from '../components/elements/Animation'

const indexPage = ({
  data: {
    projects: { edges: projectEdges },
    posts: { edges: postEdges },
  },
}) => (
  <Layout>
    <Parallax page={5}>
      <BlobAnimation />
      <Header
        offset={0}
        speed={0.2}
        big
        title={
          <>
            Hey, <br />
            Je suis {config.siteTitle}! <Hand>👋</Hand>
          </>
        }
        subtitle={config.siteDescription}
      />
      <Container>
        <Content offset={1} speed={0.2}>
          <Title>Mes Projects</Title>
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
          <ButtonWrapper>
            <Link to="/projets">
              <Button type="button">Project</Button>
            </Link>
          </ButtonWrapper>
        </Content>
        <Content>
          <Title>Mon Blog</Title>
          {postEdges.map(post => (
            <AllArticles
              title={post.node.frontmatter.title}
              date={post.node.frontmatter.date}
              excerpt={post.node.excerpt}
              timeToRead={post.node.timeToRead}
              slug={post.node.fields.slug}
              category={post.node.frontmatter.category}
              key={post.node.fields.slug}
            />
          ))}
          <ButtonWrapper>
            <Link to="/blog">
              <Button type="button">Blog</Button>
            </Link>
          </ButtonWrapper>
        </Content>
        <About />
        <Contact />
      </Container>
      <Footer />
    </Parallax>
  </Layout>
)

export default indexPage

indexPage.propTypes = {
  data: PropTypes.shape({
    projects: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
    posts: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
  }).isRequired,
}

export const pageQuery = graphql`
  query IndexQuery {
    projects: allMdx(
      filter: { fields: { sourceInstanceName: { eq: "projects" } }, frontmatter: { publish: { eq: true } } }
      limit: 2
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD/MM/YYYY")
            category
          }
          excerpt(pruneLength: 30)
          timeToRead
        }
      }
    }
    posts: allMdx(
      filter: { fields: { sourceInstanceName: { eq: "blog" } }, frontmatter: { publish: { eq: true } } }
      limit: 2
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD/MM/YYYY")
            category
          }
          excerpt(pruneLength: 200)
          timeToRead
        }
      }
    }
  }
`
