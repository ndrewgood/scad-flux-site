import React from 'react'
import '../styles/footer.scss'
import usersvg from '../assets/icons/icon-user.svg'
import discord from '../assets/icons/discord.svg'
import insta from '../assets/icons/insta.svg'
import fb from '../assets/icons/fb.svg'
import email from '../assets/icons/email.svg'

const footer = () => {
    return(
        <footer>
            <div className="container">
                <div className="socialMediaContainer">
                    <p className="body semi-bold">Follow us</p>
                    <ul>
                        <li><img src={fb} alt=""/></li>
                        <li><img src={insta} alt=""/></li>
                        <li><img src={discord} alt=""/></li>
                        <li><img src={email} alt=""/></li>
                    </ul>
                </div>
                <form className="emailContainer">
                    <p className="body semi-bold">Send us your feedback</p>
                    <div className="emailTopBar">
                        <div className="iconInput">
                            <input type="text" name="name" placeholder="Name" id="name" className="filled"/>
                            <img src={usersvg} alt=""/>
                        </div>
                        <div className="iconInput">
                            <input type="text" placeholder="Email" name="email" id="email" className="filled"/>
                            <img src={usersvg} alt=""/>
                        </div>
                    </div>
                    <div className="iconInput">
                        <textarea name="message" placeholder="Your message" id="message" className="filled"></textarea>
                        <img src={usersvg} alt=""/>
                    </div>
                    <button type="submit" className="blueButton">Submit</button>
                </form>
            </div>
        </footer>
    )
}

export default footer