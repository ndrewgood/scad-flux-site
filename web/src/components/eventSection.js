import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'

import ViewAllButton from './viewAllButton'
import EventGrid from './eventGrid'
import EventTitle from './eventTitle'

const eventsgrid = () => {
    let now = new Date();
    let year = now.getFullYear;
    let month = now.getMonth + 1;
    let day = now.getDate;
    let date = `${year}-${month}-${day}`

    const data = useStaticQuery(graphql`
    query eventSectionQuery {
        allSanityEvent(sort: {fields: eventTime},limit: 6) {
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
      `)

    const eventArray = data.allSanityEvent.edges;

    return(
        <section className="events-grid graySection">
            <div className="container">
                <EventTitle/>
                <EventGrid array={eventArray}/>
                <ViewAllButton link="/events" type="Events"/>
            </div>           
        </section>
    )
}

export default eventsgrid