import React, { useState, useEffect } from 'react'
import {graphql, useStaticQuery} from 'gatsby'


import Layout from '../containers/layout'
import Back from '../components/back'
import CommunityGrid from '../components/communityGrid'
import Checkbox from '../components/checkbox'
import '../styles/community.scss'

import shuffle from '../lib/randomArray'


const CommunityPage = props => {

  const data = useStaticQuery(graphql`
  query communityQuery{
      allSanityCommunity {
          edges {
              node {
                  title
                  name
                  portfolio
                  year
                  id
              }
          }
      }
    }
  `)

  const communityArray = data.allSanityCommunity.edges

  useEffect(() => {
    shuffle(communityArray);
    setButtons({
      enrolled: false,
      graduated: false
    })
  }, []);

  const [buttons, setButtons] = useState({
    enrolled: false,
    graduated: false
  })



  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.id;

    setButtons({
      [name]: value
    });
  }


  return (
    <Layout>
      <main className="adjusted">
        <div className="container">
          <div className="communityHeader">
            <Back/>
            <h1 className="title medium">Community Page</h1>
            <p className="body medium">FLUX exists to foster a community of leaders and problem-solvers through UX Design. Check out some of the work from some of our members, and feel free to submit yours as well! Portfolio submissions are open to all members of the FLUX community, regardless of major.</p>
            <form>
              <Checkbox id="enrolled" 
                        checked={buttons.enrolled}
                        change={handleInputChange}
                        value="Currently Enrolled"/>
              <Checkbox id="graduated" 
                        checked={buttons.graduated}
                        change={handleInputChange}
                        value="Graduated"/>
            </form>
          </div>
          <CommunityGrid buttons={buttons} 
                         data={data}
                         array={communityArray}
                         limit={100} />
          {/* <ul className="pagination">
            <li>«</li>
            <li className="active">1</li>
            <li>2</li>
            <li>3</li>
            <li>»</li>
          </ul> */}
        </div>
      </main>
    </Layout>
  )
}

export default CommunityPage
