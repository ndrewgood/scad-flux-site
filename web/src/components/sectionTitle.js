import React from 'react'

const sectionTitle = props => {
    return(
        <div>
            <h1>{ props.title }</h1>
            <p>{ props.description}</p>
        </div>
    )
}

export default sectionTitle