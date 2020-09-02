import React from 'react'
import '../styles/gallery.scss'

const gallery = () => {
    return(
        <section className="gallery">
            <div className="container">
                <div className="sectionTitle">
                    <h1 className="title medium">Gallery</h1>
                    <p className="body medium">Heres a quick description of the kinds of events on here. this paragraph will take up more space and will have more purpose to it i just didnt feel like grabbing lorem.</p>
                </div>
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