import React from 'react'
import '../styles/footer.scss'

const footer = () => {
    return(
        <footer>
            <div className="container">
                <div className="socialMediaContainer">
                    <p className="body semi-bold">Follow us</p>
                    <ul>
                        <li>fb</li>
                        <li>ig</li>
                        <li>dc</li>
                        <li>em</li>
                    </ul>
                </div>
                <form className="emailContainer">
                    <p className="body semi-bold">Send us your feedback</p>
                    <div className="emailTopBar">
                        <input type="text" name="name" placeholder="Name" id=""/>
                        <input type="text" placeholder="Email" name="email" id=""/>
                    </div>
                    <textarea name="message" placeholder="Your message" id="message"></textarea>
                    <button type="submit" className="blueButton">Submit</button>
                </form>
            </div>
        </footer>
    )
}

export default footer