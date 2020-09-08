import React from 'react'
import '../styles/eventTitle.scss'

const eventTitle = () => {
    return (
        <div className="eventTitle">
            <h1 className="title medium">Events</h1>
            <a href="https://calendar.google.com/calendar/r?cid=e9rlneefmiuisqv958a1s9jl9c@group.calendar.google.com"><button className="whiteButton">Add FLUX Calendar</button></a>
        </div>
    )
  }
  
  export default eventTitle
  