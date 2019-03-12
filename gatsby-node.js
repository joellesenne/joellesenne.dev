const path = require('path')
const _ = require('lodash')
// const { timeToRead } = require('./src/utils')

const pathPrefixes = {
  blog: '/blog',
  projects: '/projet',
}

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

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const postPage = path.resolve('src/templates/post.jsx')
    const projectPage = path.resolve('src/templates/projet.jsx')
    const tagPage = path.resolve('src/templates/tag.jsx')
    const categoryPage = path.resolve('src/templates/categorie.jsx')
    resolve(
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
        }
      `).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const tagSet = new Set()
        const categorySet = new Set()

        const postsList = result.data.posts.edges
        const projectsList = result.data.projects.edges

        postsList.forEach((post, index) => {
          if (post.node.frontmatter.tags) {
            post.node.frontmatter.tags.forEach(tag => {
              tagSet.add(tag)
            })
          }

          if (post.node.frontmatter.category) {
            categorySet.add(post.node.frontmatter.category)
          }

          const next = index === 0 ? null : postsList[index - 1].node
          const prev = index === postsList.length - 1 ? null : postsList[index + 1].node

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

          const next = index === 0 ? null : projectsList[index - 1].node
          const prev = index === projectsList.length - 1 ? null : projectsList[index + 1].node

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
      })
    )
  })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        config: path.resolve(__dirname, 'config'),
        content: path.resolve(__dirname, 'content/'),
        component: path.resolve(__dirname, 'components/'),
        images: path.resolve(__dirname, 'images/'),
      },
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  })
}
