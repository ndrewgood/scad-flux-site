import React from 'react'
import {graphql, StaticQuery} from 'gatsby'

import EventCard from './eventCard'
import '../styles/events-grid.scss'

const eventGrid = () => {

    const eventQuery = graphql`
    query eventQuery {
        allSanityEvent {
          edges {
            node {
              _rawSlug
              title
              id
              eventTime(formatString: "MMMM Do YYYY • h:mma")
              _rawExcerpt
              thumbnail {
                asset {
                  url
                }
              }
            }
          }
        }
      }
    `

    return(
        <div className="threeGrid">
            <StaticQuery 
                query={eventQuery}
                render={data => (
                    data.allSanityEvent.edges.map(edge => (
                        <EventCard slug={edge.node._rawSlug} thumb={edge.node.thumbnail.asset.url} title={edge.node.title} id={edge.node.id} time={edge.node.eventTime} excerpt={edge.node._rawExcerpt} />
                    ))
                )}
            />
        </div>
    )
}

export default eventGrid