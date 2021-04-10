import React from 'react'

import SEO from '../components/seo'
import Navigation from '../components/nav'
import Footer from '../components/footer'
import "../styles/styles.scss"


const layout = (props) => {
    const { children } = props

    return (
        <div id="layout">
            <SEO />
            {/*<Navigation />*/}
            { children }
            <Footer/>
        </div>
    )
}

export default layout