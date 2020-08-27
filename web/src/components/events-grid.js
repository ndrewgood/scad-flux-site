import React from 'react'
import EventCard from './eventCard'
import ViewAllButton from './viewAllButton'
import '../styles/events-grid.scss'

const eventsgrid = () => {
    return(
        <section className="container">
            <h1>Events Grid</h1>
            <div className="threeGrid">
                <EventCard/>
                <EventCard/>
                <EventCard/>
            </div>
            <ViewAllButton/>           
        </section>
    )
}

export default eventsgrid