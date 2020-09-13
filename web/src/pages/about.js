import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../containers/layout'
import Back from '../components/back'

import '../styles/about.scss'

import startupPhoto from '../assets/startup.jpg'

export const query = graphql`
  query aboutPageQuery {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
      description
      keywords
    }
  }
`

const AboutPage = props => {
  const {data, errors} = props

  const site = (data || {}).site

  return (
    <Layout>
      <main className="adjusted">
        <div className="about container">
          <Back/>
          <h1 className="title medium">About Us</h1>
          <div className="aboutGallery">
            <div className="galleryPic box-shadow-dreamy"></div>
          </div>
          <p className="body medium">FLUX is the User Experience (UX) Design club at the Savannah College of Art and Design. Our events range from interdisciplinary design and development collaborations such as SCAD StartUp, to hosting employer lectures and workshops from companies such as Google, Amazon, Cerner, and more. We provide educational workshops to our members to boost their portfolio pieces, become familiar with current design software, and prepare for upcoming internship / full time opportunities. Our members include students from a large variety of majors outside of UX Design, such as Motion Media, Graphic Design, Immersive Reality, Industrial Design, and Interactive Design and Game Development. We currently have over 100 members, a team of 10 officers, and SCAD UXDG Chair, Byeong Cheol (BC) Hwang, our faculty adviser.</p>
          <p className="body medium">We're always looking for new people and companies to collaborate with us, so drop us a line at scadflux@gmail.com and lets make something happen!</p>        
        </div>
      </main>
    </Layout>
  )
}

export default AboutPage
