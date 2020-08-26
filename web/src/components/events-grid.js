import React from 'react'
import EventCard from './eventCard'
import ViewAllButton from './viewAllButton'
import viewAllButton from './viewAllButton'

const eventsgrid = () => {
    return(
        <div>
            <h1>Events Grid</h1>
            <div>
                <EventCard/>
                <EventCard/>
                <EventCard/>
            </div>
            <ViewAllButton/>           
        </div>
    )
}

export default eventsgrid