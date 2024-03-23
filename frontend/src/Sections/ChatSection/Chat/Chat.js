import React from 'react'
import person from '../../../images/HowWork/person.png'
import logo from '../../../images/Banner/logo.png'
import './Chat.css'

export default function Chat() {
  return (
    <div className='allchatcontent'>
        <div className='saudiImg'>
            <img src={person} alt='person'></img>
        </div>
        <div>
            <img src={logo}></img>
        </div>
        <div className='howCanHelp'>
            <p>How can I help you today?</p>
        </div>
    </div>
  )
}
