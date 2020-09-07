import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../containers/layout'
import Back from '../components/back'
import EventGrid from '../components/eventGrid'


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
          <Back/>
          <h1 className="title medium">Events Page</h1>
          <EventGrid/>
        </div>
      </main>
    </Layout>
  )
}

export default EventsPage
