import React from 'react'
import { Link } from 'gatsby'
import "../styles/nav.scss"
import logo from '../assets/flux2020logo.jpg'

const nav = (props) => {
    return(
        <nav>
            <div className="container">
                <img src={logo} alt="" width="50px" height="50px"/>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/events">Events</Link></li>
                    <li><Link to="/community">Community</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default nav