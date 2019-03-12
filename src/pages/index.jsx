/* eslint-disable import/no-unresolved */
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

// config
import config from 'config/site'

// elements
import { Title } from 'components/elements/Typographies'
import { ButtonWrapper, Button } from 'components/elements/Button'
import { ProjectsWrapper } from 'components/elements/ProjectsCard'

// views

// partials
import { Header, Bio, Contact, Footer } from 'components/partials'

// animation
import { Hand } from 'components/elements/Animation'

// components
import { AllArticles, AllProjects } from 'components/common'
import { Layout, Container, Content, BlobAnimation } from '../components/views'

const indexPage = ({
  data: {
    projects: { edges: projectEdges },
    posts: { edges: postEdges },
  },
}) => (
  <Layout>
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
          <Button to="/projets">Project</Button>
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
          <Button to="/blog">Blog</Button>
        </ButtonWrapper>
      </Content>
      <Bio />
      <Contact />
    </Container>
    <Footer />
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
