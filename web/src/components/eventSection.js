import React from 'react'
import ViewAllButton from './viewAllButton'
import EventGrid from './eventGrid'
import EventTitle from './eventTitle'

const eventsgrid = () => {
    return(
        <section className="events-grid graySection">
            <div className="container">
                <EventTitle/>
                <EventGrid/>
                <ViewAllButton link="/events" type="Events"/>
            </div>           
        </section>
    )
}

export default eventsgrid