import React from 'react'

import CommunityGrid from './communityGrid'
import ViewAllButton from './viewAllButton'
import '../styles/smallCommunityGrid.scss'

const communitySection = () => {
    return(
        <section className="smallCommunityGrid graySection">
            <div className="container">
                <div className="sectionTitle">
                    <h1 className="title medium">FLUX Community</h1>
                    <div className="communityDescription">
                        <p className="body medium">FLUX exists to foster a community of leaders and problem-solvers through UX Design. Check out some of the work from some of our members, and feel free to submit yours as well! Portfolio submissions are open to all members of the FLUX community, regardless of major.</p>
                        <button className="whiteButton">Submit Your Portfolio</button>
                    </div>
                </div>
                <CommunityGrid/>
                <ViewAllButton link="/community" type="Talent"/>
            </div>
        </section>
    )
}

export default communitySection