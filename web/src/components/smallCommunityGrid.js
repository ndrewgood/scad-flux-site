import React from 'react'
import CommunityCard from './communityCard'
import SectionTitle from './sectionTitle'
import ViewAllButton from './viewAllButton'
import '../styles/smallCommunityGrid.scss'

const smallCommunityGrid = () => {
    return(
        <section className="container smallCommunityGrid">
            <SectionTitle title="Commmunity" description="Heres a quick description of the kinds of events on here. this paragraph will take up more space and will have more purpose to it i just didnt feel like grabbing lorem."/>
            <div className="threeGrid">
                <CommunityCard/>
                <CommunityCard/>
                <CommunityCard/>
            </div>
            <ViewAllButton link="about"/>
        </section>
    )
}

export default smallCommunityGrid