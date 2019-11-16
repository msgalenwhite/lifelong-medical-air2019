import React from 'react'
import {graphql} from 'gatsby'

export const BaseTemplateQuery = graphql`
query($id: ID!) {
    lifeLongWordPress {
      page(id: $id) {
        slug
        base_page_template_data {
          mainContent
          primaryHeader
          secondHeader
          secondaryContent
        }
      }
    }
  }
`

export const wpBaseTemplate = ({data}) => {
    return (
        <pre>{JSON.stringify(data, null, 2)}</pre>
    )
}

export default wpBaseTemplate
