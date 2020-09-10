import React from 'react'

import CommunityCard from './communityCard'
import '../styles/smallCommunityGrid.scss'

const communityGrid = (props) => {


    return(
        <div className="threeGrid">
            {   props.buttons ? 
                    props.buttons.seniors ? 
                        props.array.filter((i) => {return i.node.year == "senior"}).slice(0, props.limit).map((edge, index) => (
                            <CommunityCard key={index} name={edge.node.name} title={edge.node.title} year={edge.node.year} portfolio={edge.node.portfolio} picture={edge.node.image}/>
                        ))
                    : props.buttons.alumni ? 
                        props.array.filter((i) => {return i.node.year == "alumni"}).slice(0, props.limit).map((edge, index) => (
                            <CommunityCard key={index} name={edge.node.name} title={edge.node.title} year={edge.node.year} portfolio={edge.node.portfolio} picture={edge.node.image}/>
                        ))
                    : 
                        props.array.slice(0, props.limit).map((edge, index) => (
                            <CommunityCard key={index} name={edge.node.name} title={edge.node.title} year={edge.node.year} portfolio={edge.node.portfolio} picture={edge.node.image}/>
                        ))
                :
                props.array.slice(0, props.limit).map((edge, index) => (
                    <CommunityCard key={index} name={edge.node.name} title={edge.node.title} year={edge.node.year} portfolio={edge.node.portfolio} picture={edge.node.image}/>
                ))
            }
        </div>
    )
}

export default communityGrid