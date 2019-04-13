const path = require('path')
const _ = require('lodash')
// const { timeToRead } = require('./src/utils')

const pathPrefixes = {
  blog: '/blog',
  projects: '/projet',
  pages: '',
}

// Tuto <https://www.lekoarts.de/en/blog/tips-and-tricks-for-gatsby>
const wrapper = promise =>
  promise.then(result => {
    if (result.errors) {
      throw result.errors
    }
    return result
  })

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  let slug

  if (node.internal.type === 'Mdx') {
    const fileNode = getNode(node.parent)
    const pathPrefix = pathPrefixes[fileNode.sourceInstanceName]
    if (Object.prototype.hasOwnProperty.call(node, 'fileAbsolutePath')) {
      slug = `/${_.kebabCase(
        _.split(node.fileAbsolutePath, '/')
          .slice(-2, -1)
          .join('/')
      )}`
    }
    createNodeField({
      node,
      name: 'sourceInstanceName',
      value: fileNode.sourceInstanceName,
    })
    createNodeField({
      node,
      name: 'slug',
      value: `${pathPrefix}${slug}`,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const postPage = path.resolve('src/templates/post.jsx')
  const projectPage = path.resolve('src/templates/projet.jsx')
  const pagesPage = path.resolve('src/templates/page.jsx')
  const tagPage = path.resolve('src/templates/tag.jsx')
  const categoryPage = path.resolve('src/templates/categorie.jsx')

  const result = await wrapper(
    graphql(`
      {
        posts: allMdx(
          filter: { fields: { sourceInstanceName: { eq: "blog" } }, frontmatter: { publish: { eq: true } } }
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
          edges {
            node {
              fileAbsolutePath
              frontmatter {
                tags
                category
                title
                cover {
                  childImageSharp {
                    resize(width: 600) {
                      src
                    }
                  }
                }
              }
              fields {
                slug
              }
            }
          }
        }
        projects: allMdx(
          filter: { fields: { sourceInstanceName: { eq: "projects" } }, frontmatter: { publish: { eq: true } } }
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
          edges {
            node {
              fields {
                slug
              }
              fileAbsolutePath
              frontmatter {
                tags
                category
                title
                cover {
                  childImageSharp {
                    resize(width: 600) {
                      src
                    }
                  }
                }
              }
            }
          }
        }
        pages: allMdx(
          filter: { fields: { sourceInstanceName: { eq: "pages" } }, frontmatter: { publish: { eq: true } } }
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
          edges {
            node {
              fields {
                slug
              }
              fileAbsolutePath
              frontmatter {
                title
                cover {
                  childImageSharp {
                    resize(width: 600) {
                      src
                    }
                  }
                }
              }
            }
          }
        }
      }
    `)
  )

  const postsList = result.data.posts.edges
  const projectsList = result.data.projects.edges

  const tagSet = new Set()
  const categorySet = new Set()

  postsList.forEach((post, index) => {
    if (post.node.frontmatter.tags) {
      post.node.frontmatter.tags.forEach(tag => {
        tagSet.add(tag)
      })
    }

    if (post.node.frontmatter.category) {
      categorySet.add(post.node.frontmatter.category)
    }

    const prev = index === postsList.length - 1 ? null : postsList[index + 1].node
    const next = index === 0 ? null : postsList[index - 1].node

    createPage({
      path: post.node.fields.slug,
      component: postPage,
      context: {
        slug: post.node.fields.slug,
        prev,
        next,
      },
    })
  })

  projectsList.forEach((project, index) => {
    if (project.node.frontmatter.tags) {
      project.node.frontmatter.tags.forEach(tag => {
        tagSet.add(tag)
      })
    }

    if (project.node.frontmatter.category) {
      categorySet.add(project.node.frontmatter.category)
    }

    const prev = index === projectsList.length - 1 ? null : projectsList[index + 1].node
    const next = index === 0 ? null : projectsList[index - 1].node

    createPage({
      path: project.node.fields.slug,
      component: projectPage,
      context: {
        slug: project.node.fields.slug,
        prev,
        next,
      },
    })
  })

  result.data.pages.edges.forEach(page => {
    createPage({
      path: page.node.fields.slug,
      component: pagesPage,
      context: {
        slug: page.node.fields.slug,
      },
    })
  })

  const tagList = Array.from(tagSet)
  tagList.forEach(tag => {
    createPage({
      path: `/tag/${_.kebabCase(tag)}/`,
      component: tagPage,
      context: {
        tag,
      },
    })
  })

  const categoryList = Array.from(categorySet)
  categoryList.forEach(category => {
    createPage({
      path: `/categorie/${_.kebabCase(category)}/`,
      component: categoryPage,
      context: {
        category,
      },
    })
  })
}

exports.onCreateWebpackConfig = ({ getConfig, stage, loaders, actions }) => {
  const config = getConfig()
  if (stage === 'build-htlm') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-clap-button/,
            use: loaders.null,
          },
        ],
      },
    })
  }
  if (stage.startsWith('develop') && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-dom': '@hot-loader/react-dom',
    }
  }
}
