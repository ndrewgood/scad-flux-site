import React from 'react'
import '../styles/eventCard.scss'
import { Link } from 'gatsby'
import image from '../assets/test-photo.jpg'

const eventCard = props => {
    let size = "eventCard"

    if(props.size) {
        size += " " + props.size
    }

    return(
        <div className={size}>
            <div>
                <img src={image} alt=""/>
            </div>
            <h2 className="body large bold">Event Name</h2>
            <h3 className="body regular">Event Time/Date</h3>
            <p className="body small">Event Description</p>
            <Link to="/" activeClassName="viewMore body small semi-bold">View More</Link>
        </div>
    )
}

export default eventCard