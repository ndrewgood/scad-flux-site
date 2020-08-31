import React from 'react'

const footer = () => {
    return(
        <footer>
            <div className="container">
                <div className="socialMediaContainer">
                    <p>Follow us</p>
                    <ul>
                        <li>fb</li>
                        <li>ig</li>
                        <li>dc</li>
                        <li>em</li>
                    </ul>
                </div>
                <div className="emailContainer">
                    <p>Send us your feedback</p>
                    <div className="emailTopBar">
                        <input type="text" name="Your Name" id=""/>
                        <input type="text" name="Email" id=""/>
                    </div>
                    <textarea name="Your Messafe" id="" cols="30" rows="10"></textarea>
                </div>
            </div>
        </footer>
    )
}

export default footer