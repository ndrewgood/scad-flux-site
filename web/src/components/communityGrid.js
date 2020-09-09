import React from 'react'

import CommunityCard from './communityCard'
import '../styles/smallCommunityGrid.scss'

const communityGrid = (props) => {


    return(
        <div className="threeGrid">
            {   props.buttons ? 
                    props.buttons.graduated ? 
                        props.array.filter((i) => {return i.node.year == "senior"}).slice(0, props.limit).map((edge, index) => (
                            <CommunityCard key={index} name={edge.node.name} title={edge.node.title} year={edge.node.year} portfolio={edge.node.portfolio}/>
                        ))
                    : props.buttons.enrolled ? 
                        props.array.filter((i) => {return i.node.year !== "senior"}).slice(0, props.limit).map((edge, index) => (
                            <CommunityCard key={index} name={edge.node.name} title={edge.node.title} year={edge.node.year} portfolio={edge.node.portfolio}/>
                        ))
                    : 
                        props.array.slice(0, props.limit).map((edge, index) => (
                            <CommunityCard key={index} name={edge.node.name} title={edge.node.title} year={edge.node.year} portfolio={edge.node.portfolio}/>
                        ))
                :
                props.array.slice(0, props.limit).map((edge, index) => (
                    <CommunityCard key={index} name={edge.node.name} title={edge.node.title} year={edge.node.year} portfolio={edge.node.portfolio}/>
                ))
            }
        </div>
    )
}

export default communityGrid