import React from 'react'
import { Link } from 'gatsby'
import '../styles/viewAllButton.scss'

const viewAllButton = props => {
    return(
        <div className="viewAllButton">
            <Link to={props.link}>
                <button>View All</button>
            </Link>
        </div>
    )
}

export default viewAllButton