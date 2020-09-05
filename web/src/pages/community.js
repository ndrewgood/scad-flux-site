import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../containers/layout'
import Back from '../components/back'
import CommunityGrid from '../components/communityGrid'


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
      <main className="adjusted">
        <div className="container">
          <Back/>
          <h1>Community Page</h1>
          <CommunityGrid/>
        </div>
      </main>
    </Layout>
  )
}

export default CommunityPage
