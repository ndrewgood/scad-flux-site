import React from 'react'
import {StaticQuery, graphql} from 'gatsby'


import HeroButton from './heroButton'

import '../styles/hero.scss'
import fluxLogo from "../assets/FLUXlogo.svg";

const hero = () => {

    const heroQuery = graphql`
        query heroQuery {
            sanityHeroCta {
                ctaList {
                    title
                    link
                    text
                }
            }
        }
    `


    return(
        <div className="hero">
            <img src={fluxLogo} className="box-shadow-dreamy" alt=""/>
            <div className="heroHeaderContainer">
                <h1>We're the Future Leaders of <br/>User Experience Design</h1>
                <div className="heroHighlight hh1"></div>
                <div className="heroHighlight hh2"></div>
            </div>
            <h2>A student-run organization from <br/>the Savannah College of Art and Design</h2>
            <div className="buttonHolder">
                <StaticQuery 
                  query={heroQuery}
                  render={data => (
                    data.sanityHeroCta.ctaList.map( cta => (
                        <HeroButton link={cta.link} title={cta.text} />
                    ))
                  )}
                />
            </div>
        </div>
    )
}

export default hero