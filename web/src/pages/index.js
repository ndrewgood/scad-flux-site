import React from 'react'
import {graphql} from 'gatsby'

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
      description
      keywords
    }
  }
`

const IndexPage = props => {
  const {data, errors} = props

  const site = (data || {}).site

  return (
    <div>
      <h1>{site.title}</h1>
    </div>
  )
}

export default IndexPage
