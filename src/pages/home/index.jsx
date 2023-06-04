import React from 'react'
import Api from '../apigelen'
import Section1 from '../section1'
import Slide from '../slide'
import Sosial from '../sosial'
import Text from '../text'
import Sosial2 from '../sosial2'

const Home = () => {
  return (
    <div>
      <Slide/>
      <Section1/>
      <Sosial/>
      <Api/>
      <Text/>
      <Sosial2/>
    </div>
  )
}

export default Home
