import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'


const seo = () => {
    const data = useStaticQuery(graphql`
    query seoQuery {
        site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
            title
          }
      }
      
  `)
  const site = (data || {}).site
    
    return (
        <Helmet>
            <title>{site.title}</title>
            <meta name="description" content="SCAD FLUX" />
        </Helmet>
    )
}

export default seo