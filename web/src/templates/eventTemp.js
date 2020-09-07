import React from 'react'
import { graphql } from 'gatsby'
import BlockContent from '@sanity/block-content-to-react'


import Layout from '../containers/layout'
import Back from '../components/back'

export const query = graphql`

  query eventTempQuery($slug: String!) {
    event: sanityEvent(slug: {current: {eq: $slug}}) {
          id
          title
          slug {
            current
          }
          _rawExcerpt
          _rawBody
          _rawThumbnail
          eventTime
        }
  }
  
`

const eventTemplate = props => {
  const { data } = props

  const event = data && data.event

  return (
    <Layout>
        <main className="adjusted">
        <div className="container">
          <Back/>
          <h1>{event.title}</h1>
          <p>
            <BlockContent blocks={event._rawExcerpt}/>
          </p>
        </div>
      </main>
    </Layout>
  )
}

export default eventTemplate