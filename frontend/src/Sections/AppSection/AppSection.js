import React from 'react'
import './AppSection.css'
import TitleComponent from '../../Components/TitleComponet/TitleComponent'
import appAvtar from '../../images/AppSection/appAndAvatar.png'
import appStore from '../../images/AppSection/AppStore.png'
import googleStore from '../../images/AppSection/googlePlay.png'

export default function AppSection() {
  return (
    <div className='app-container'>
        <div className='imgappavtr'>
            <img src={appAvtar} alt='appAvtar'></img>
        </div>
        <div className='app-info-content'>
            <TitleComponent TitleSpan='choose' TitleText='your device platform' styleText='big-text'/>
            <h1>Checkout our 2STFSR  App</h1>
            <p className='app-info-content-p'>Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
            <div className='app-links'>
                <a><img src={appStore} alt='appStore'></img></a>
                <a><img src={googleStore} alt='googleStore'></img></a>
            </div>
        </div>
    </div>
  )
}
