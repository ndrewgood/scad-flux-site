import React from 'react'
import { Link } from 'gatsby'
import "../styles/nav.scss"
import Logo from '../assets/FLUXlogo.svg'

const nav = (props) => {
    return(
        <nav>
            <div className="container">
                <Link to="/">
                    <Logo/>
                </Link>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/events">Events</Link></li>
                    <li className="selected"><Link to="/community">Community</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default nav