import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../containers/layout'


export const query = graphql`
  query eventsPageQuery {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
      description
      keywords
    }
  }
`

const EventsPage = props => {
  const {data, errors} = props

  const site = (data || {}).site

  return (
    <Layout>
      <main className="adjusted">
        <div className="container">
          <h1>Events Page</h1>
        </div>
      </main>
    </Layout>
  )
}

export default EventsPage
