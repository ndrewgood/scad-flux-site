import React from 'react'
import '../styles/eventCard.scss'

const eventCard = props => {
    let size = "eventCard " + props.size

    return(
        <div className={size}>
            <img src="" alt=""/>
            <h2>Event Name</h2>
            <h3>Event Time/Date</h3>
            <p>Event Description</p>
            <p>View More</p>
        </div>
    )
}

export default eventCard