import React from 'react'
import {StaticQuery, graphql} from 'gatsby'
import HeroButton from './heroButton'
import Parallax from 'react-rellax'

import '../styles/hero.scss'
import FluxLogo from "../assets/FLUXlogo.svg";
import Circle from "../assets/leftCircle.svg";
import Top from "../assets/top.svg";
import OtherTop from "../assets/otherTop.svg";
import Diamond from "../assets/diamond.svg";
import Bottom from "../assets/bottom.svg";
import BottomX from "../assets/bottomX.svg";
import MiddleX from "../assets/middleX.svg";
import Plus from "../assets/plus.svg";



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