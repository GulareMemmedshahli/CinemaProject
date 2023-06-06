import React from 'react'
import Api from '../apigelen'
import Section1 from '../section1'
import Slide from '../slide'
import Sosial from '../sosial'
import Text from '../text'
import Sosial2 from '../sosial2'
import BacktoTop from '../backto'
import {Helmet} from "react-helmet";
const Home = () => {
  return (
    <div>
         <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <Slide/>
      <Section1/>
      <Sosial/>
      <Api/>
      <Text/>
      <Sosial2/>
      <BacktoTop/>
    </div>
  )
}

export default Home
