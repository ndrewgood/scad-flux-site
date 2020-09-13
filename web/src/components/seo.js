import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'
import favicon from '../assets/favicon2.png'


const seo = () => {
    const data = useStaticQuery(graphql`
    query seoQuery {
        site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
            title
          }
      }
      
    `)
    const site = (data || {}).site
    
    const title = "SCAD Flux"
    const desc = "FLUX | the User Experience (UX) Design club at the Savannah College of Art and Design."

    return (
        <Helmet
            link={[
                { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }
            ]}
            title="SCAD Flux"
            meta={[
                {
                name: `description`,
                content: desc,
                },
                {
                property: `og:title`,
                content: title,
                },
                {
                property: `og:description`,
                content: desc,
                },
                {
                property: `og:type`,
                content: `website`,
                },
                {
                name: `twitter:card`,
                content: `summary`,
                },
                {
                name: `twitter:creator`,
                content: title,
                },
                {
                name: `twitter:title`,
                content: title,
                },
                {
                name: `twitter:description`,
                content: desc,
                },
            ]}
        />
    )
}

export default seo