import React from 'react'
import VersionChat from './VersionChat/VersionChat'
import Chat from './Chat/Chat'
import './ChatSection.css'
import FAQ from './FAQ/FAQ'
import InputChat from './InputChat/InputChat'

export default function ChatSection() {
  return (
    <div className='CHAT-CONTENT'>
          <VersionChat/>
      <div className='chatSection-container'>
        <Chat/>
        <div className='faq-chatSection'>
        <FAQ/>
        </div>
      </div>
    </div>

  )
}
