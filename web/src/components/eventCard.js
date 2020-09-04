import React from 'react'
import '../styles/card.scss'
import { Link } from 'gatsby'
import image from '../assets/test-photo.jpg'

const eventCard = props => {
    let size = "eventCard card"

    if(props.size) {
        size += " " + props.size
    }

    return(
        <Link className={size} to="/" >
            <div>
                <img src={image} alt=""/>
            </div>
            <h2 className="body large bold">Event Name</h2>
            <h3 className="body regular">Event Time/Date</h3>
            <p className="body small">Event Description</p>
            <p className="viewMore body small semi-bold">View More</p>
        </Link>
    )
}

export default eventCard