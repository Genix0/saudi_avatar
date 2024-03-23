import React from 'react'
import AboutUs from './AboutUs/AboutUs'
import Plan from './Plan/Plan'
import '../About Us_UpgradePlan/Plan/Plan.css'

export default function About_Plan() {
  return (
    <div className='allcontentofAboutandPlan' id='upgradePlan'>
        <AboutUs/>
        <Plan/>
    </div>
  )
}
