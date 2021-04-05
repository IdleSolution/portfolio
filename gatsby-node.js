exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === "build-html" || stage === "develop-html") {
      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: /@splidejs/,
              use: loaders.null(),
            },
          ],
        },
      })
    }
  }

exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions
    const projectTemplate = require.resolve(`./src/templates/projectTemplate.js`)
    const result = await graphql(`
      {
        allMarkdownRemark {
            edges {
                node {
                    html
                    frontmatter {
                        slug
                        title
                        description
                        technologies
                        online
                        imgs
                    }
                }
            }

        }
      }
    `)
    // Handle errors
    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: node.frontmatter.slug,
            component: projectTemplate,
            context: {
                // additional data can be passed via context
                slug: node.frontmatter.slug,
                title: node.frontmatter.title,
                description: node.frontmatter.description,
                technologies: node.frontmatter.technologies,
                online: node.frontmatter.online,
                imgs: node.frontmatter.imgs,
                html: node.html
            },
        })
    })
}