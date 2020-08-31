import React from 'react'
import SectionTitle from './sectionTitle'
import '../styles/gallery.scss'

const gallery = () => {
    return(
        <section className="gallery">
            <div className="container">
                <SectionTitle title="Gallery" description="Heres a quick description of the kinds of events on here. this paragraph will take up more space and will have more purpose to it i just didnt feel like grabbing lorem."/>
                <div className="galleryGrid">
                    <div className="one gridArea"></div>
                    <div className="two gridArea"></div>
                    <div className="three gridArea"></div>
                    <div className="four gridArea"></div>
                    <div className="five gridArea"></div>
                    <div className="six gridArea"></div>
                </div>
            </div>
        </section>
    )
}

export default gallery