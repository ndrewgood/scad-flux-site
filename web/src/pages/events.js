import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../containers/layout'
import Back from '../components/back'
import EventGrid from '../components/eventGrid'
import Checkbox from '../components/checkbox'
import EventTitle from '../components/eventTitle'
import '../styles/event.scss'

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
          <div className="eventsHeader">
            <Back/>
            <EventTitle/>
            <form>
                <Checkbox id="pastEvents" value="Show Past Events"/>
              </form>
          </div>
          <EventGrid limit={100}/>
        </div>
      </main>
    </Layout>
  )
}

export default EventsPage
