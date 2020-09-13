import React from 'react'

import '../styles/newsletter.scss'

const newsletter = (props) => {
    return(
        <section className="newsletter">
            <div className="container">
                <h1 className="title medium center">Want to know more?</h1>
                <p className="body center">Sign up for our weekly newsletter for the latest FLUX updates</p>
                <form action="https://send.pageclip.co/HDxWQMLZAInA7o0yg09cY2rTdfEY3r4x/flux" class="pageclip-form" method="post" className="inputContainer">
                    <input type="email" placeholder="SCAD Email Address" name="scademail" id="newsletter-input" className="outlined"/>
                    <button className="blueButton pageclip-form__submit" type="submit">Subscribe</button>
                </form>
            </div>
        </section>            
    )
}

export default newsletter