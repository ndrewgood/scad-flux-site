import React from 'react'
import '../styles/winnerCard.scss'
import Photo from '../assets/startup.jpg'

const winnerCard = (props) => {
    return(
        <div className="winnerCard">
            <img src={Photo}></img>
            <div>
                <div className="projectTitle">
                    <h2 className="body large bold">Team Name</h2>
                    <h3 className="body regular semi-bold gold">1st Place</h3>
                </div>
                <p class="projectDescription">Here is a description of the project. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan pellentesque felis ac volutpat. Vestibulum ut nulla scelerisque, luctus nibh eu, luctus turpis. Vestibulum vitae viverra libero. Etiam ac mi dapibus, hendrerit nisl ac, consequat nunc. Donec molestie ornare pellentesque.</p>
                <h3 className="body regular bold">Team</h3>
                <div className="teamGrid">
                    <p>Andrew Goodridge - UX Junior</p>
                    <p>Varun Khatri - UX Junior</p>
                    <p>Eric Flatt - UX Senior</p>
                    <p>Nico Zafarana - UX Junior</p>
                </div>
                <p className="viewMore body small semi-bold">Learn More</p>
            </div>
        </div>
    )
}

export default winnerCard