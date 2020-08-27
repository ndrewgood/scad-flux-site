import React from 'react'
import { Link } from 'gatsby'
import "../styles/nav.scss"

const nav = (props) => {
    return(
        <nav>
            <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/about"><li>About</li></Link>
                <Link to="/events"><li>Events</li></Link>
                <Link to="/community"><li>Community</li></Link>
                <Link to="/contact"><li>Contact</li></Link>
            </ul>
        </nav>
    )
}

export default nav