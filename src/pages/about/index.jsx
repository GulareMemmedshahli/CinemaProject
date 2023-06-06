import React from 'react'
import "./index.scss"
import {Helmet} from "react-helmet";
const About = () => {
  return (
    <div className='about'>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Movie</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      About
    </div>
  )
}

export default About
