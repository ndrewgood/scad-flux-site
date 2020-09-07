import React from 'react'
import {graphql, StaticQuery} from 'gatsby'

import CommunityCard from './communityCard'
import '../styles/smallCommunityGrid.scss'

const communityGrid = () => {

    const communityQuery = graphql`
        query communityQuery{
            allSanityCommunity {
                edges {
                    node {
                        title
                        name
                        portfolio
                        year
                    }
                }
            }
        }
    `

    return(
        <div className="threeGrid">
            <StaticQuery 
                query={communityQuery}
                render={data => (
                    data.allSanityCommunity.edges.map(edge => (
                        <CommunityCard name={edge.node.name} title={edge.node.title} year={edge.node.year} portfolio={edge.node.portfolio}/>
                    ))
                )}
            />
        </div>
    )
}

export default communityGrid