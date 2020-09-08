const { isFuture } = require('date-fns')
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { format } = require('date-fns')

async function createBlogPostPages(graphql, actions, reporter) {
  const { createPage } = actions
  const result = await graphql(`
    {
      allSanityPost(filter: {slug: {current: {ne: null}}, publishedAt: {ne: null}}) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const postEdges = (result.data.allSanityPost || {}).edges || []

  postEdges
    .filter(edge => !isFuture(edge.node.publishedAt))
    .forEach((edge, index) => {
      const { id, slug = {}, publishedAt } = edge.node
      const dateSegment = format(publishedAt, 'YYYY/MM')
      const path = `/newsroom/${dateSegment}/${slug.current}/`

      reporter.info(`Creating blog post page: ${path}`)

      createPage({
        path,
        component: require.resolve('./src/templates/blog-post.js'),
        context: { id }
      })
    })
}

async function createAuthorPages(graphql, actions, reporter) {
  const { createPage } = actions
  const result = await graphql(`
    {
      allSanityAuthor {
        edges {
          node {
            name
            _id
            slug {
              current
            }
            _rawBio
          }
        }
      }
    }
  `)
  if (result.errors) throw result.errors
  const authorEdges = (result.data.allSanityAuthor || {}).edges || []
  const _id = authorEdges._id
  const name = authorEdges.name
  authorEdges.forEach((edge, index) => {
    const { name, slug = {} } = edge.node
    const path = `/authors/${slug.current}/`
    reporter.info(`Creating author page: ${path}`)
    createPage({
      path,
      name,
      component: require.resolve('./src/templates/author-page.js'),
      context: { name }
    })
  })
}

async function createCategoryPages(graphql, actions, reporter) {
  const { createPage } = actions
  const result = await graphql(`
    {
      allSanityCategory {
        edges {
          node {
            _id
            title
            slug {
              current
            }
          }
        }
      }
    }
  `)
  if (result.errors) throw result.errors
  const categoryEdges = (result.data.allSanityCategory || {}).edges || []
  const id = categoryEdges._id
  const title = categoryEdges.title
  categoryEdges.forEach((edge, index) => {
    const { title, slug = {} } = edge.node
    const path = `/categories/${slug.current}/`
    reporter.info(`Creating Category page: ${path}`)
    createPage({
      path,
      id,
      title,
      component: require.resolve('./src/templates/cat-page.js'),
      context: { title }
    })
  })
}


exports.createPages = async ({ graphql, actions, reporter }) => {
  await createBlogPostPages(graphql, actions, reporter)
  await createAuthorPages(graphql, actions, reporter)
  await createCategoryPages(graphql, actions, reporter)
}

exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
  if (stage === 'build-javascript') {
    const config = getConfig()
    const miniCssExtractPlugin = config.plugins.find(
      plugin => plugin.constructor.name === 'MiniCssExtractPlugin'
    )
    if (miniCssExtractPlugin) {
      miniCssExtractPlugin.options.ignoreOrder = true
    }
    actions.replaceWebpackConfig(config)
  }
}
