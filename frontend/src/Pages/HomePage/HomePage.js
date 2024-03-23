import React from 'react'
import CardSection from '../../Sections/CardSection/CardSection'
import About_Plan from '../../Sections/About Us_UpgradePlan/About_Plan'
import AppSection from '../../Sections/AppSection/AppSection'
import How_Work from '../../Sections/How_Work/How_Work'
import FinalBanner from '../../Components/FinalBanner/FinalBanner'
import FinalFooter from '../../Components/Footer/FinalFooter'

export default function HomePage() {
  return (
    <div className=''>
      <FinalBanner/>
        <CardSection/>
        <How_Work/>
        <About_Plan/>
        <AppSection/>
        <FinalFooter/>
    </div>
  )
}
