exports.createPages = async function ({ actions, graphql}) {
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

    data.lifeLongWordPress.pages.nodes.forEach(page => {
        const slug = page.slug;
        const id = page.id
        if(page.base_page_template_data && page.base_page_template_data.mainContent) {
            actions.createPage({
                path: slug,
                component: require.resolve('./src/templates/wp-base-template.js'),
                context: {id: id}
            })
        }
        
    });
}