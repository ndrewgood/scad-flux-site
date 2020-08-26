import React from 'react'
import CommunityCard from './communityCard'
import SectionTitle from './sectionTitle'
import ViewAllButton from './viewAllButton'

const smallCommunityGrid = () => {
    return(
        <div>
            <SectionTitle title="Commmunity" description="Heres a quick description of the kinds of events on here. this paragraph will take up more space and will have more purpose to it i just didnt feel like grabbing lorem."/>
            <div>
                <CommunityCard/>
                <CommunityCard/>
                <CommunityCard/>
            </div>
            <ViewAllButton/>
        </div>
    )
}

export default smallCommunityGrid