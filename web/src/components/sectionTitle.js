import React from 'react'
import '../styles/sectionTitle.scss'

const sectionTitle = props => {
    return(
        <div className="sectionTitle">
            <h1 className="title medium">{ props.title }</h1>
            <p className="body medium">{ props.description}</p>
        </div>
    )
}

export default sectionTitle