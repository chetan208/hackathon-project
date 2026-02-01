import React from 'react'
import HeroSection from '../componets/Home/HeroSection'
import WhatDoesPlatformDo from '../componets/Home/WhatDoesPlatformDo'
import MainServices from '../componets/Home/MainServices'
import HowItWorks from '../componets/Home/HowitWorks'
import HospitalCTA from '../componets/Home/HospitalCTA'

function Home() {
  return (
    <div>
      <HeroSection/>
      <WhatDoesPlatformDo/>
      <MainServices/>
      <HowItWorks/>
      <HospitalCTA/>
    </div>
  )
}

export default Home
