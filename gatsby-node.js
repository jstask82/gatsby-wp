const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)
const indexPage = "/home" //WP Index-page without tailing slash

// Gatsby API “createPages”.
exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions
  //Redirect IndexPage to '/'
  createRedirect({
    fromPath: indexPage,
    toPath: "/",
    redirectInBrowser: true,
    isPermanent: true,
  })
  //Redirect IndexPage with tailing slash to '/'
  createRedirect({
    fromPath: `${indexPage}/`,
    toPath: "/",
    redirectInBrowser: true,
    isPermanent: true,
  })

  const result = await graphql(`
    {
      allWordpressPage {
        edges {
          node {
            id
            path
            status
            template
            title
            content
          }
        }
      }
      allWordpressPost {
        edges {
          node {
            id
            path
            status
            template
            format
            title
            content
          }
        }
      }
      allWordpressWpPortfolio {
        edges {
          node {
            id
            title
            excerpt
            content
            path
            slug
            acf {
              url
            }
            featured_media {
              title
              caption
              alt_text
              source_url
            }
          }
        }
      }
    }
  `)

  // Check for any errors
  if (result.errors) {
    throw new Error(result.errors)
  }

  // Access query results via object destructuring
  const {
    allWordpressPage,
    allWordpressPost,
    allWordpressWpPortfolio,
  } = result.data

  // Create Page pages.
  // create a detailed page for each page node.
  const pageTemplate = path.resolve(`./src/templates/Page.js`)
  allWordpressPage.edges.forEach(edge => {
    edge.node.path === `${indexPage}/`
      ? createPage({
          path: "/",
          component: slash(pageTemplate),
          context: { data: edge.node },
        })
      : createPage({
          path: edge.node.path,
          component: slash(pageTemplate),
          context: { data: edge.node },
        })
  })

  // create a detailed page for each post node.
  const postTemplate = path.resolve(`./src/templates/Post.js`)
  allWordpressPost.edges.forEach(edge => {
    createPage({
      path: `/post${edge.node.path}`,
      component: slash(postTemplate),
      context: { data: edge.node },
    })
  })

  //create a detailed page for each portfolio node (custom post type).
  const portfolioTemplate = path.resolve(`./src/templates/Portfolio.js`)
  allWordpressWpPortfolio.edges.forEach(edge => {
    createPage({
      path: edge.node.path,
      component: slash(portfolioTemplate),
      context: { data: edge.node },
    })
  })
}
