import React from 'react'
import '../styles/footer.scss'
import usersvg from '../assets/icons/icon-user.svg'
import Discord from '../assets/icons/discord.svg'
import Insta from '../assets/icons/insta.svg'
import Fb from '../assets/icons/fb.svg'
import Email from '../assets/icons/email.svg'

const footer = () => {
    return(
        <footer>
            <div className="container">
                <div className="socialMediaContainer">
                    <p className="body semi-bold">Follow us</p>
                    <ul>
                        <a href="https://www.facebook.com/groups/scadflux" target="_blank"><li><Fb/></li></a>
                        <a href="https://www.instagram.com/scadflux/" target="_blank"><li><Insta/></li></a>
                        <a href="https://discord.gg/FMJ4tY8" target="_blank"><li><Discord/></li></a>
                        <a href="mailto:scadflux@gmail.com" target="_blank"><li><Email/></li></a>
                    </ul>
                </div>
                <form action="https://send.pageclip.co/0UiYhDA0j1IX44dBk33MbopV8pazPw22" class="pageclip-form" method="post" className="emailContainer">
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