import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import moment from 'moment';

import ViewAllButton from './viewAllButton'
import EventGrid from './eventGrid'
import EventTitle from './eventTitle'


const eventsgrid = () => {

    // I decided to use Moment instead of vanilla js time/date functions bcus... they're fucking horrible haha
    // I also got rid of the limit in graphql and did it manually later.
    // ALSO decided to use unix time bcus.. i want things to be as confusing as possible >:)
    // (jk its easier to add, subject, and compare time with unix time)

    const data = useStaticQuery(graphql`
    query eventSectionQuery {
        allSanityEvent(sort: {fields: eventTime}) {
          edges {
            node {
              _rawSlug
              title
              id
              eventTime(formatString: "X")
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

//               eventTime(formatString: "MMMM Do YYYY • h:mma")
    //finds current time, changes to unix format
    let currentTime = moment().format("X")

    //Only include events which are greater than the current time OR have a time of null
    //(I added a day(or 86400 second) window in case someone wants to see the event the next day after it happened)
    //And then I sliced off all but the first 3 events :)
    let noPastEvents = eventArray.filter((edge) => {
      return parseInt(edge.node.eventTime) + 86400 > parseInt(currentTime) || edge.node.eventTime == null;
    }).slice(0,3);

    return(
        <section className="events-grid graySection">
            <div className="container">
                <EventTitle/>
                <EventGrid array={noPastEvents}/>
                <ViewAllButton link="/events" type="Events"/>
            </div>           
        </section>
    )
}

export default eventsgrid