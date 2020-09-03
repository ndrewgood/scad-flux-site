import React from 'react'

import '../styles/heroButton.scss'

const heroButton = props => {
    return(
    <a className="heroButton" target="_blank" href={props.link}><button className="blueButton">{props.title}</button></a>
    )
}

export default heroButton