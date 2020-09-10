import React from 'react'
import '../styles/communityCard.scss'



const communityCard = (props) => {
    return(
        <a target="_blank" href={props.portfolio} className="communityCard">
            <div className="communityCardHeader">
                <div>
                    {props.picture ?
                    <img src={props.picture.asset.url} alt=""/>
                    :
                    <img src="https://style.anu.edu.au/_anu/4/images/placeholders/person.png" alt=""/>
                    }
                </div>
            <h2 className="name body medium bold">{props.name}</h2>
            </div>
            <p className="speciality body">{props.title ? props.title : "UX Designer"}</p>
            <p className="location body small">{props.year}</p>
        </a>
    )
}

export default communityCard