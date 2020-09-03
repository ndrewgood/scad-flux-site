import React from 'react'
import '../styles/communityCard.scss'
import image from '../assets/test-photo.jpg'


const communityCard = (props) => {
    return(
        <a target="_blank" href={props.portfolio} className="communityCard">
            <div className="communityCardHeader">
                <div>
                    <img src={image} alt=""/>
                </div>
            <h2 className="name body medium bold">{props.name}</h2>
            </div>
            <p className="speciality body">{props.title ? props.title : "UX Designer"}</p>
            <p className="location body small">{props.year}</p>
        </a>
    )
}

export default communityCard