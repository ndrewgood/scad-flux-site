import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../containers/layout'


export const query = graphql`
  query contactPageQuery {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
      description
      keywords
    }
  }
`

const ContactPage = props => {
  const {data, errors} = props

  const site = (data || {}).site

  return (
    <Layout>
      <h1>Contact Page</h1>
    </Layout>
  )
}

export default ContactPage
