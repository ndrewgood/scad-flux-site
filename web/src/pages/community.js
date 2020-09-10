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
                  image {
                    asset {
                        url
                    }
                }
              }
          }
      }
    }
  `)

  const communityArray = data.allSanityCommunity.edges

  useEffect(() => {
    shuffle(communityArray);
    setButtons({
      seniors: false,
      alumni: false
    })
  }, []);

  const [buttons, setButtons] = useState({
    seniors: false,
    alumni: false
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
            <div className="communityDescription">
                <p className="body medium">FLUX exists to foster a community of leaders and problem-solvers through UX Design. Check out some of the work from some of our members, and feel free to submit yours as well! Portfolio submissions are open to all members of the FLUX community, regardless of major.</p>
                <a target="_blank" href="https://forms.gle/ZVgPmL3qT8Qrs7xZA"><button className="whiteButton">Submit Your Portfolio</button></a>
            </div>            
            <form>
              <Checkbox id="seniors" 
                        checked={buttons.seniors}
                        change={handleInputChange}
                        value="Seniors"/>
              <Checkbox id="alumni" 
                        checked={buttons.alumni}
                        change={handleInputChange}
                        value="Alumni"/>
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
