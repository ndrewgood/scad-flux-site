import React, {useEffect} from 'react'
import '../styles/communityCard.scss'



const communityCard = (props) => {
    let picture = props.picture;
    let pictureUrl = props.picture.asset.url;
    let url = props.portfolio

    useEffect(() => {
        picture = props.picture;
        pictureUrl = props.picture.asset.url;
        url = props.portfolio;
    }, []);


    return(
        <a id={props.id} target="_blank" href={url} className="communityCard">
            <div className="communityCardHeader">
                <div>
                    {
                        picture ?
                        <img src={pictureUrl} alt=""/>
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