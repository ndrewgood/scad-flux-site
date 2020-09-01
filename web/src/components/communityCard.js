import React from 'react'
import '../styles/communityCard.scss'
import image from '../assets/test-photo.jpg'


const communityCard = () => {
    return(
        <div className="communityCard">
            <div className="communityCardHeader">
                <div>
                    <img src={image} alt=""/>
                </div>
                <h2 className="name body medium bold">Person Name</h2>
            </div>
            <p className="speciality body">Interaction Designer</p>
            <p className="location body small">Atlanta, GA, USA</p>
        </div>
    )
}

export default communityCard