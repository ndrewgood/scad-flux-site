exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
  
    const result = await graphql(`
      {
        allSanityEvent(filter: { slug: { current: { ne: null } } }) {
          edges {
            node {
              id
              title
              slug {
                current
              }
              _rawExcerpt
              _rawBody
              _rawThumbnail
              eventTime
            }
          }
        }
      }
    `)
  
    if (result.errors) {
      throw result.errors
    }
  
    const events = result.data.allSanityEvent.edges || []


    events.forEach((edge, index) => {
      const slug = edge.node.slug.current
      const path = `/events/${edge.node.slug.current}`
  
      createPage({
        path,
        component: require.resolve("./src/templates/eventTemp.js"),
        context: { slug }
      })
    })

  }