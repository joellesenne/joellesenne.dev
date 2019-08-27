/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable import/no-unresolved */
import React from 'react'
import { useWindowSize } from 'react-use'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

// config
import config from 'config/site'

// animation <https://github.com/alampros/react-confetti>
import Confetti from 'react-confetti'

// components
import {
  Hand,
  ArticlesCard,
  ProjectsCard,
  Button,
  Header,
  Bio,
  Contact,
  Footer,
  Layout,
  Container,
  Content,
} from '../components'

// styles
import { ProjectsWrapper } from '../components/All/ProjectsCard/StyledProjectsCard'
import { Title } from '../components/Typographies/StyledTypographies'

const indexPage = ({
  data: {
    projects: { nodes: projects },
    posts: { nodes: posts },
  },
}) => {
  const { width, height } = useWindowSize()
  return (
    <Layout>
      <Confetti
        confettiSource={{ x: width / 2, y: height / 2, w: 0, h: 0 }}
        numberOfPieces={100}
        gravity={0.1}
        opacity={100}
        width={width}
        height={height}
        style={{ zIndex: -1 }}
      />
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
          <Title>Côté projet</Title>
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
          <Button url="/projets" title="Voir mes projets" />
        </Content>
        <Content>
          <Title>Côté blog</Title>
          {posts.map(post => (
            <ArticlesCard
              title={post.frontmatter.title}
              date={post.frontmatter.date}
              excerpt={post.excerpt}
              timeToRead={post.timeToRead}
              slug={post.fields.slug}
              category={post.frontmatter.category}
              key={post.fields.slug}
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
      nodes: PropTypes.array.isRequired,
    }),
    posts: PropTypes.shape({
      nodes: PropTypes.array.isRequired,
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
      nodes {
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
    posts: allMdx(
      filter: { fields: { sourceInstanceName: { eq: "blog" } }, frontmatter: { publish: { eq: true } } }
      limit: 2
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
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
`
