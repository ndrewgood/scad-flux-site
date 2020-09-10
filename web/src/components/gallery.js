import React from 'react'
import '../styles/gallery.scss'
import GalleryCard from './galleryCard'

const gallery = () => {
    return(
        <section className="gallery">
            <div className="container">
                <div className="sectionTitle">
                    <h1 className="title medium">FLUX Gallery</h1>
                    <p className="body medium">Heres a quick description of the kinds of events on here. this paragraph will take up more space and will have more purpose to it i just didnt feel like grabbing lorem.</p>
                </div>
                <div className="galleryGrid">
                    <GalleryCard wide={true}/>
                    <GalleryCard/>
                    <GalleryCard/>
                    <GalleryCard/>
                    <GalleryCard/>
                </div>
            </div>
        </section>
    )
}

export default gallery