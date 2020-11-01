import React from 'react'
import '../styles/winnerCard.scss'

const winnerCard = (props) => {
    var rankingClass = "body regular semi-bold " + props.rankColor;

    return(
        <a className="winnerCard" href={props.url} target="_blank">
            <img src={props.photo}></img>
            <div>
                <div className="projectTitle">
                    <h2 className="body large bold">{props.teamName}</h2>
                    <h3 className={rankingClass}>{props.ranking}</h3>
                </div>
                <p class="projectDescription">{props.description}</p>
                <h3 className="body regular bold">Team Members</h3>
                <div className="teamGrid">
                    <div>
                        <p className="memberName">{props.team1}</p>
                        <p className="body small">{props.team1Detail}</p>
                    </div>
                    <div>
                        <p className="memberName">{props.team2}</p>
                        <p className="body small">{props.team2Detail}</p>
                    </div>
                    <div>
                        <p className="memberName">{props.team3}</p>
                        <p className="body small">{props.team3Detail}</p>
                    </div>
                    <div>
                        <p className="memberName">{props.team4}</p>
                        <p className="body small">{props.team4Detail}</p>
                    </div>
                </div>
                <p className="viewMore body small semi-bold">Learn More</p>
            </div>
        </a>
    )
}

export default winnerCard