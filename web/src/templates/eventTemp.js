import React from 'react'
import { graphql } from 'gatsby'
import BlockContent from '@sanity/block-content-to-react'
import moment from 'moment'


import Layout from '../containers/layout'
import Back from '../components/back'

import '../styles/eventTemp.scss'

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
      thumbnail {
        asset {
          url
        }
      }
      eventTime(formatString: "X")
      _rawBody
      links {
        title
        url
      }
    }
  }
  
`

const eventButtons = props => {
  const event = props

  return (
    <div className="eventButtonContainer">
      {event.links.map(link => {
        return (
          <a target="_blank" href={link.url}><button className="blueButton">{link.title}</button></a>
        )
      })}
    </div>
  )

}


const eventTemplate = props => {
  const { data } = props

  const event = data && data.event
  
  //Takes unix time from props, formats it to our display format 
  let time = moment(event.eventTime, "X").format("MMMM Do YYYY • h:mma")

  return (
    <Layout>
        <main className="adjusted">
        <div className="container">
          <Back/>
          <div className="eventContainer">
            <div className="eventPhoto">
            <img src={event.thumbnail.asset.url} alt=""/>
            </div>
            <div className="eventDetails">
              <h1>{event.title}</h1>
              <p className="body" >{event.eventTime ? time + " EST" : "Time and Date TBD"}</p>
              <h2 className="aboutHeader">About the event</h2>
              <BlockContent 
                className="body" 
                blocks={event._rawBody}
                renderContainerOnSingleChild={true}/>
              {event.links.length > 0 ? eventButtons(event) : null}
            </div>
          </div>
 
        </div>
      </main>
    </Layout>
  )
}

export default eventTemplate