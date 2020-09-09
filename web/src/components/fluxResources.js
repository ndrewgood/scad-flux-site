import React from 'react'
import ResourceCard from './resourceCard'
import discord from '../assets/discord.jpg'
import mentor from '../assets/mentor.jpg'
import medium from '../assets/medium.jpg'

const fluxResources = () => {
    return (
        <section className="fluxResources graySection">
            <div className="container">
                <h1 className="title medium">FLUX Resources</h1>
                <div className="threeGrid">
                    <ResourceCard title="Join the FLUX Discord!" description="We have a Discord! Join us for the latest FLUX updates, share cool ideas, meet new people, and have fun!" cta="Join the Discord here" link="https://discord.gg/FMJ4tY8" image={discord}/>
                    <ResourceCard title="Mentor / Mentee Program" description="Our mentorship program is still happening this quarter! Stay tuned in our Discord or Instagram for the latest updates!" cta="More info coming soon!" link="" image={mentor}/>
                    <ResourceCard title="FLUX Medium Publication" description="FLUX will be publishing medium articles to help support you through these turbulent times! Want to write or submit an article? Let us know!" cta="View FLUX Medium" link="https://medium.com/scadflux" image={medium}/>
                </div>
            </div>
        </section>
    )
}

export default fluxResources