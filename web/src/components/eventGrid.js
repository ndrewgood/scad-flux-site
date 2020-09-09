import React from 'react'

import EventCard from './eventCard'

const eventGrid = props => {
    
    console.log(props.array)

    return(
        <div className="threeGrid">
            {
              props.array.map(edge => 
                (
                  <EventCard slug={edge.node._rawSlug} thumb={edge.node.thumbnail.asset.url} title={edge.node.title} id={edge.node.id} time={edge.node.eventTime} excerpt={edge.node._rawExcerpt} />
                )
              )
            }
        </div>
    )
}

export default eventGrid