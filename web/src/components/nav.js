import React from 'react'
import { Link } from 'gatsby'
import "../styles/nav.scss"

const nav = (props) => {
    return(
        <nav>
            <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/"><li>About</li></Link>
                <Link to="/"><li>Events</li></Link>
                <Link to="/"><li>Community</li></Link>
                <Link to="/"><li>Contact</li></Link>
            </ul>
        </nav>
    )
}

export default nav