import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../containers/layout'
import Hero from '../components/hero'
import EventSection from '../components/eventSection'
import Newsletter from '../components/newsletter'
import Gallery from '../components/gallery'
import CommunitySection from '../components/communitySection'
import FluxResources from '../components/fluxResources.js'

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
      <main>
        <EventSection />
        <Newsletter />
        <FluxResources />
        <Gallery />
        <CommunitySection />
      </main>
    </Layout>
  )
}

export default IndexPage
