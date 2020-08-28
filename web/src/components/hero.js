import React from 'react'
import HeroButton from './heroButton'
import '../styles/hero.scss'

const hero = () => {
    return(
        <div className="hero">
            <img src="" alt=""/>
            <h1>We're the Future Leaders of <br/>User Experience Design</h1>
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