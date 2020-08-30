import React from 'react'

import HeroButton from './heroButton'

import '../styles/hero.scss'
import fluxLogo from "../assets/FLUXlogo.svg";


const hero = () => {
    return(
        <div className="hero">
            <img src={fluxLogo} className="box-shadow-dreamy" alt=""/>
            <div className="heroHeaderContainer">
                <h1>We're the Future Leaders of <br/>User Experience Design</h1>
                <div class="heroHighlight hh1"></div>
                <div class="heroHighlight hh2"></div>
            </div>
            <h2>A student-run organization from <br/>the Savannah College of Art and Design</h2>
            <div className="buttonHolder">
                <HeroButton link="" title="Button"/>
                <HeroButton link="" title="Button"/>
                <HeroButton link="" title="Button"/>
            </div>
        </div>
    )
}

export default hero