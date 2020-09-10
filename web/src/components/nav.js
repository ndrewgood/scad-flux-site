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
                    <li><Link to="/" activeClassName="selected">Home</Link></li>
                    <li><Link to="/about" activeClassName="selected">About</Link></li>
                    <li><Link to="/events" activeClassName="selected" partiallyActive>Events</Link></li>
                    <li><Link to="/community" activeClassName="selected">Community</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default nav