import React from 'react'
import Header from '../Header/Header'
import './FinalBanner.css'
import BannerComponent2 from '../BannerComponent/BannerComponent2'
import ComplementBanner2 from '../ComplementOfBanner/ComplementBanner2'

export default function FinalBanner2() {
  return (
    <div className='FinalBanner2'>
      <Header />
      <BannerComponent2 />
      <ComplementBanner2 BannerTitle='Payment'/>
    </div>
  )
}