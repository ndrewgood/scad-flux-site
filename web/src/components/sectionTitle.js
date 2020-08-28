import React from 'react'
import '../styles/sectionTitle.scss'

const sectionTitle = props => {
    return(
        <div className="sectionTitle">
            <h1>{ props.title }</h1>
            <p>{ props.description}</p>
        </div>
    )
}

export default sectionTitle