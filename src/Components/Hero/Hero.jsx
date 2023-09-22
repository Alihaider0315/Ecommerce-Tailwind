import React from 'react'
import Banner from './Banner/Banner'
import Product from './Products/Products'
import Static from './Static/Static'
import Testimonial from './Testimonial/Testimonial'

const Hero = () => {
  return (
    <div>
      <Banner/>
      <Product/>
      <Static/>
      <Testimonial />
    </div>
  )
}

export default Hero
