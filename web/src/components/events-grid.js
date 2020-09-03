import React from 'react'
import EventCard from './eventCard'
import ViewAllButton from './viewAllButton'
import '../styles/events-grid.scss'

const eventsgrid = () => {
    return(
        <section className="events-grid">
            <div className="container">
                <div className="eventTitle">
                    <h1 className="title medium">Events</h1>
                    <button className="whiteButton">Add FLUX Calendar</button>
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