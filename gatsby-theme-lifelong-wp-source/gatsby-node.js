exports.createPages = async function ({ actions, graphql, reporter}, options) {
    const { data } = await graphql(`
        query {
            lifeLongWordPress {
                pages {
                  nodes {
                    id
                    base_page_template_data {
                      fieldGroupName
                      mainContent
                      primaryHeader
                    }
                    slug
                  }
                }
              }

        }
    `)
    if(data.errors) {
      reporter.panic("Error loading pages from WordPress.", result.errors)
    }
    let basePath = options.basePath || "/"
    if(basePath.slice(-1) !== "/") {
     basePath = basePath.concat("/")
    }
    data.lifeLongWordPress.pages.nodes.forEach(page => {
        const slug = page.slug;
        const id = page.id
        if(page.base_page_template_data && page.base_page_template_data.mainContent) {
            actions.createPage({
                path: basePath.concat(slug),
                component: require.resolve('./src/templates/wp-base-template.js'),
                context: {id: id}
            })
        }

    });
}
