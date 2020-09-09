import React from 'react'
import {StaticQuery, graphql} from 'gatsby'


import HeroButton from './heroButton'

import '../styles/hero.scss'
import FluxLogo from "../assets/FLUXlogo.svg";
import leftCircle from "../assets/leftCircle.svg";


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
            <FluxLogo className="fluxLogo box-shadow-dreamy"/>
            <leftCircle className="leftCircle"/>
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
                    data.sanityHeroCta.ctaList.map( (cta, index) => (
                        <HeroButton key={index} link={cta.link} title={cta.text} />
                    ))
                  )}
                />
            </div>
        </div>
    )
}
 
export default hero