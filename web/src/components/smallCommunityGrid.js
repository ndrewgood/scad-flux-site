import React from 'react'
import {graphql, StaticQuery} from 'gatsby'

import CommunityCard from './communityCard'
import ViewAllButton from './viewAllButton'
import '../styles/smallCommunityGrid.scss'

const smallCommunityGrid = () => {

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
        <section className="smallCommunityGrid">
            <div className="container">
                <div className="sectionTitle">
                    <h1 className="title medium">FLUX Community</h1>
                    <div className="communityDescription">
                        <p className="body medium">FLUX exists to foster a community of leaders and problem-solvers through UX Design. Check out some of the work from some of our members, and feel free to submit yours as well! Portfolio submissions are open to all members of the FLUX community, regardless of major.</p>
                        <button className="whiteButton">Submit Your Portfolio</button>
                    </div>
                </div>
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
                <ViewAllButton link="/community" type="Talent"/>
            </div>
        </section>
    )
}

export default smallCommunityGrid