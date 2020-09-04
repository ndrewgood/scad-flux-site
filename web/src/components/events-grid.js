import React from 'react'
import EventCard from './eventCard'
import ViewAllButton from './viewAllButton'
import '../styles/events-grid.scss'

const eventsgrid = () => {
    return(
        <section className="events-grid graySection">
            <div className="container">
                <div className="eventTitle">
                    <h1 className="title medium">Events</h1>
                    <a href="https://calendar.google.com/calendar/r?cid=e9rlneefmiuisqv958a1s9jl9c@group.calendar.google.com"><button className="whiteButton">Add FLUX Calendar</button></a>
                </div>
                <div className="threeGrid">
                    <EventCard size="expanded"/>
                    <EventCard/>
                    <EventCard/>
                    <EventCard/>
                    <EventCard/>
                </div>
                <ViewAllButton link="/events" type="Events"/>
            </div>           
        </section>
    )
}

export default eventsgrid