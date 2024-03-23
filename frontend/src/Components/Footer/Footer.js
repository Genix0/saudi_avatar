import React from 'react'
import logo from '../../images/Banner/logo.png'
import wats from '../../images/SocialMedia/wats.png'
import insta from '../../images/SocialMedia/insta.png'
import facebook from '../../images/SocialMedia/facebook.png'
import './Footer.css'

export default function Footer() {
  return (
    <div className='FooterContainer'>
        <div className='linkscontainer'>
        <div className='imgFooterContainer'>
            <img src={logo}></img>
        </div>
        <div className='FooterLink'>
            <a>Home</a>
            <a>About</a>
            <a>Privacy</a>
            <a>Contact Us</a>
        </div>
        </div>
        <div className='CopyRightSection'>
            <div className='copyRightInfo'>
                <p> Powered BY Genix.© 2024 </p>
            </div>
            <div className='socialMediaIcon'>
                <button><img src={wats} alt='wats'></img></button>
                <button><img src={insta} alt='insta'></img></button>
                <button><img src={facebook} alt='faceBook'></img></button>
            </div>
        </div>
    </div>
  )
}
