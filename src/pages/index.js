import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card';

const IndexPage = () => (

  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Learn to <br />design and code React apps</h1>
        <p>Complete courses about the best tools and design systems.</p>
        <Link to="/page-2/">Go to page 2</Link>
        <Link to="/video">Watch the video</Link>
      </div>
    </div>
    <div className="Cards">
      <h2>11 courses, more coming</h2>
        <Card
          title="React for Designers"
          text="12 sections"
          image={require('../images/christie3.jpg')} />
          <Card
          title="Tester"
          text="12 sections"
          image={require('../images/christie3.jpg')} />
          <Card
          title="AFs"
          text="12 sections"
          image={require('../images/christie3.jpg')} />
          <Card
          title="React for Designers"
          text="12 sections"
          image={require('../images/christie3.jpg')} />
  
    </div>
  </div>
)

export default IndexPage
