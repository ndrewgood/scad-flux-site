import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../containers/layout'
import Hero from '../components/hero'
import EventsGrid from '../components/events-grid'
import Gallery from '../components/gallery'
import SmallCommunityGrid from '../components/smallCommunityGrid'


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
    <Layout>
      <Hero />
      {/* events title */}
      <main>
        <EventsGrid />
        <Gallery />
        <SmallCommunityGrid />
      </main>
    </Layout>
  )
}

export default IndexPage
