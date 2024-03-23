import React from 'react'
import './../ChatSection.css'
import { Avatar } from '@mui/material';
export default function ChatDisplay({ chatMessages }) {
    return (
      <div className="chat-display">
        {chatMessages.map((message, index) => (
          <div className='content-ff'>
            <div className='message-chat'>
              <div>{message}</div>
            </div>
            <Avatar src="/broken-image.jpg" />
          </div>
        ))}
      </div>
    );
  }