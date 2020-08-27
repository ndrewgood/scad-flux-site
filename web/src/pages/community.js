import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../containers/layout'


export const query = graphql`
  query communityPageQuery {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
      description
      keywords
    }
  }
`

const CommunityPage = props => {
  const {data, errors} = props

  const site = (data || {}).site

  return (
    <Layout>
      <h1>Community Page</h1>
    </Layout>
  )
}

export default CommunityPage
