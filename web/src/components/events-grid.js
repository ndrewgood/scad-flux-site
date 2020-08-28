import React from 'react'
import EventCard from './eventCard'
import ViewAllButton from './viewAllButton'
import '../styles/events-grid.scss'

const eventsgrid = () => {
    return(
        <section className="events-grid">
            <div class="container">
                <h1>Events Grid</h1>
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