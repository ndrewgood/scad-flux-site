import React from 'react'
import HeroButton from './heroButton'
import '../styles/hero.scss'

const hero = () => {
    return(
        <div className="hero">
            <img src="" alt=""/>
            <h1>We are Future Leader of User Experience</h1>
            <h2>A student-run organization from the Savannah College of Art and Design</h2>
            <div className="buttonHolder">
                <HeroButton/>
                <HeroButton/>
                <HeroButton/>
            </div>
        </div>
    )
}

export default hero