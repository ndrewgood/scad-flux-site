import React from 'react'
import { Link } from 'gatsby'
import '../styles/heroButton.scss'

const heroButton = props => {
    return(
    <Link to={props.link}><button className="largeBlueButton">{props.title}</button></Link>
    )
}

export default heroButton