import React from 'react'
import Hero from './home/Hero'
import Services from './home/Services'
import Services2 from './home/Services2'
import Reviews from './home/reviews'
import WhatWeOffer from './home/Offer'
import RecentProjects from './home/RecentProjects'
import CTA from './home/CTA'
import FAQ from './home/Faqs'

const page = () => {
  return (
    <div>
      <Hero/>
      <Services2/>
      <Reviews/>
      <WhatWeOffer/>
      <RecentProjects/>
      <Services/>
      <FAQ/>
      <CTA/>
    </div>
  )
}

export default page
