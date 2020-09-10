import React from 'react'
import '../styles/card.scss'
import { Link } from 'gatsby'
import BlockContent from '@sanity/block-content-to-react'


const eventCard = (props) => {
    let size = "eventCard card"

    if(props.size) {
        size += " " + props.size
    }

    return(
        <Link className={size} to={"events/" + props.slug.current} >
            <div>
                <img src={props.thumb} alt=""/>
            </div>
            <h2 className="body large bold">{props.title}</h2>
            <h3 className="body regular">{props.time ? props.time : "Time and Date TBD"}</h3>
            <BlockContent className="body small" blocks={props.excerpt} />
            <p className="viewMore body small semi-bold">View More</p>
        </Link>
    )
}

export default eventCard