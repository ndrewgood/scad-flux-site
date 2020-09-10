import React from 'react'
import '../styles/galleryCard.scss'
import image from '../assets/medium.jpg'

const galleryCard = props => {
    let width = "galleryItem"
    
    if(props.wide == true) {
        width = "galleryItem wide"
    }

    let backgroundImg = {
        background: `url(${image}) no-repeat center`,
        "background-size": "cover"
    }

    return(
        <div className={width} style={backgroundImg}>
            <div className="galleryInfo">

            </div>
        </div>
    )
}

export default galleryCard