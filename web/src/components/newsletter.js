import React from 'react'

import '../styles/newsletter.scss'

const newsletter = (props) => {
    return(
        <section className="newsletter">
            <div className="container">
                <h1 className="title medium center">Want to know more?</h1>
                <p className="body center">Sign up for our weekly newsletter for the latest FLUX updates</p>
                <div className="inputContainer">
                    <input type="text" name="SCAD Email Address" id="newsletter-input"/>
                    <button className="blueButton" type="submit">Subscribe</button>
                </div>
            </div>
        </section>            
    )
}

export default newsletter