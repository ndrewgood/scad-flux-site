import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../containers/layout'
import Back from '../components/back'
import CommunityGrid from '../components/communityGrid'
import Checkbox from '../components/checkbox'
import '../styles/community.scss'


export const query = graphql`
  query communityPageQuery {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
      description
      keywords
    }
  }
`

const CommunityPage = props => {
  const {data, errors} = props

  const site = (data || {}).site

  return (
    <Layout>
      <main className="adjusted">
        <div className="container">
          <div className="communityHeader">
            <Back/>
            <h1 className="title medium">Community Page</h1>
            <p className="body medium">FLUX exists to foster a community of leaders and problem-solvers through UX Design. Check out some of the work from some of our members, and feel free to submit yours as well! Portfolio submissions are open to all members of the FLUX community, regardless of major.</p>
            <form>
              <Checkbox id="enrolled" value="Currently Enrolled"/>
              <Checkbox id="graduated" value="Graduated"/>
            </form>
          </div>
          <CommunityGrid/>
        </div>
      </main>
    </Layout>
  )
}

export default CommunityPage
