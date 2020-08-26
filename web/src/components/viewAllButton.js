import React from 'react'
import { Link } from 'gatsby'

const viewAllButton = props => {
    return(
        <Link to="{props.link}">
            <button>View All</button>
        </Link>
    )
}

export default viewAllButton