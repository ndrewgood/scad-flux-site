import React from 'react'
import { Link } from 'gatsby'
import "../styles/nav.scss"
import logo from '../assets/FLUXlogo.svg'

const nav = (props) => {
    return(
        <nav>
            <div className="container">
                <Link to="/">
                    <img src={logo} alt="" width="40px" height="40px"/>
                </Link>
                <ul>
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