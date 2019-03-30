
import React from 'react'
import { useWindowSize } from 'react-use'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

// config
import config from 'config/site'

// animation <https://github.com/alampros/react-confetti>
import Confetti from 'react-confetti'

// components
import { Header, Bio, Contact, Footer } from '../components/partials'
import { Hand } from '../components/Animation'
import { AllArticles, AllProjects } from '../components/All'
import { ProjectsWrapper } from '../components/All/ProjectsCard/StyledProjectsCard'
import { Button } from '../components'
import { Title } from '../components/Typographies/StyledTypographies'

// views
import { Layout, Container, Content } from '../components/views'

const indexPage = ({
  data: {
    projects: { edges: projectEdges },
    posts: { edges: postEdges },
  },
}) => {
  const { width, height } = useWindowSize()
  return (
    <Layout>
      <Confetti confettiSource={{x: width / 2, y: height / 2, w: 0, h: 0 }} numberOfPieces={100} gravity={0.1} opacity={100} width={width} height={height} style={{ zIndex: -1 }} />
      <Header
        big
        title={
          <>
            Hey, <br />
            Je suis {config.siteTitle}!<Hand />
          </>
        }
        subtitle={config.siteDescription}
      />
      <Container>
        <Content>
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
          <Button url="/projets" title="Voir mes projets" />
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
          <Button url="/blog" title="Voir mes articles" />
        </Content>
        <Bio />
        <Contact />
      </Container>
      <Footer />
    </Layout>
  )
}

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
