import React from 'react'
import '../styles/card.scss'


const resourceCard = props => {
    return(
        <a target="_blank" href={props.link} className="resourceCard card">
            <div>
                <img src={props.image} alt=""/>
            </div>
            <h2 className="body large bold">{props.title}</h2>
            <p className="body small">{props.description}</p>
            <p className="viewMore body small semi-bold">{props.cta}</p>
        </a>
    )
}

export default resourceCard