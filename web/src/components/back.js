import React from 'react'
import { Link } from 'gatsby'
import Arrow from '../assets/backArrow.svg'
import '../styles/back.scss'

const back = () => {
    return(
        <Link to="/" className="backButton">
            <Arrow/>
            <p className="body medium">Back</p>
        </Link>
    )
}

export default back