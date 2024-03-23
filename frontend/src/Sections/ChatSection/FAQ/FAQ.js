import React, { useState } from 'react';
import FAQ2 from '../../../images/Banner/Icon.png';
import './FAQ.css';
import ChatDisplay from '../ChatDisplay/ChatDisplay';
import InputChat from '../InputChat/InputChat';

export default function FAQ() {
  const [inputText, setInputText] = useState('');
  const [chatMessages, setChatMessages] = useState([]);

  const handleHhImageClick = () => {
    if (inputText.trim() !== '') {
      setChatMessages([...chatMessages, inputText]);
      setInputText('');
      console.log('input Message', inputText)
      console.log('chatMessages Message', chatMessages)
    }
  };

  return (
    <div className='all-container-faq'>
      {chatMessages.length === 0 && (
        <>
          <div className='faq-container-content'>
            <div className='FAQ-container'>
              <p>What are the primary sources of law in Saudi Arabia?</p>
              <img src={FAQ2} alt='faq' />
            </div>
            <div className='line'>|||</div>
            <div className='FAQ-container'>
              <p>What are the primary sources of law in Saudi Arabia?</p>
              <img src={FAQ2} alt='faq' />
            </div>
          </div>
          <div className='faq-container-content'>
            <div className='FAQ-container'>
              <p>What are the primary sources of law in Saudi Arabia?</p>
              <img src={FAQ2} alt='faq' />
            </div>
            <div className='line'>|||</div>
            <div className='FAQ-container'>
              <p>What are the primary sources of law in Saudi Arabia?</p>
              <img src={FAQ2} alt='faq' />
            </div>
          </div>
        </>
      )}

{chatMessages.length > 0  && <div className='display-chat-not'><ChatDisplay chatMessages={chatMessages} /></div>}
      
      <InputChat
        inputText={inputText}
        setInputText={setInputText}
        handleHhImageClick={handleHhImageClick}
      />
    </div>
  );
}
