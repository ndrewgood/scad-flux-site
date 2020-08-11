import React from 'react'

import SEO from '../components/seo'
import Navigation from '../components/nav'


const layout = (props) => {
    const { children } = props

    return (
        <div id="layout">
            <SEO />
            <Navigation />
            { children }
        </div>
    )
}

export default layout