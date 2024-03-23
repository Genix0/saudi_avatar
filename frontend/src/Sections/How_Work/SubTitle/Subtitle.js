import React from 'react'
import TitleComponent from '../../../Components/TitleComponet/TitleComponent'
import './Subtitle.css'

export default function Subtitle() {
  return (
    <div className='subTitle-container'>
        <TitleComponent styleText='big-text' TitleSpan='My' TitleText='work process'/>
        <h3>How the Website Works</h3>
        <p className='subTitle-container-p'>Ask me any question about law and I will answer<br/> you immediately.</p>
    </div>
  )
}
