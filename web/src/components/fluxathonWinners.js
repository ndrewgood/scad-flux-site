import React from 'react'
import WinnerCard from './winnerCard'

import '../styles/fluxathonWinners.scss'
import '../styles/winnerCard.scss'
import Photo from '../assets/startup.jpg'
import winnerCard from './winnerCard'

const fluxathonWinners = (props) => {
    return(
        <section className="graySection">
            <div className="container">
                <div className="sectionTitle">
                    <h1 className="title medium">FLUXathon x Duolingo Winners</h1>
                    <div className="communityDescription">
                        <p className="body medium">FLUXathon Fall 2020 was our BIGGEST Fluxathon yet with over 20 team registered to complete. On top of that, it was the first time we had a company sponsor, Duolingo. We had a great time collaborating with them and the projects that came out of this 24-hour design sprint were amazing.</p>
                        <a target="_blank" href="https://scad.zoom.us/rec/play/CeoURNlzdS4H-JUWZilAVdc2rPWItzNowmrw2TLvnOfOQ2oLYlt1Q105oWphLaKez5ZuobYg3zOKMxMr.lar9H3VAhkfBUlXf?startTime=1603487218000&_x_zm_rtaid=dhLUsymvTAS5K81-HJZpVA.1603989174671.8fa3e31b9371a6ea35095d05c22c3e52&_x_zm_rhtaid=927"><button className="whiteButton">Watch Presentations</button></a>
                    </div>
                </div>
                <WinnerCard/>
                <ul className="slider-buttons">
                    <li>«</li>
                    <li>»</li>
                </ul>
            </div>
        </section>
    )
}

export default fluxathonWinners