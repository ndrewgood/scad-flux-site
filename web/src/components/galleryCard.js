import React from 'react'
import '../styles/galleryCard.scss'
import image from '../assets/test-photo.jpg'

const gallery = props => {
    return(
        <div className="gridArea">
            <img src={image} alt=""/>
            <div>
                <div>
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                </div>
                <button></button>           
            </div>
        </div>
    )
}

export default galleryCard