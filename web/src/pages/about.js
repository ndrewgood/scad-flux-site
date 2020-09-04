import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../containers/layout'


export const query = graphql`
  query aboutPageQuery {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
      description
      keywords
    }
  }
`

const AboutPage = props => {
  const {data, errors} = props

  const site = (data || {}).site

  return (
    <Layout>
      <main className="adjusted">
        <div className="container">
          <h1>About Page</h1>
        </div>
      </main>
    </Layout>
  )
}

export default AboutPage
