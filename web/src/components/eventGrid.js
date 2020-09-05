import React from 'react'
import EventCard from './eventCard'
import '../styles/events-grid.scss'

const eventGrid = () => {
    return(
        <div className="threeGrid">
            <EventCard/>
            <EventCard/>
            <EventCard/>
            <EventCard/>
            <EventCard/>
            <EventCard/>
        </div>
    )
}

export default eventGrid