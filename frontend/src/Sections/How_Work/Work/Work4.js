import React from 'react'
import './Work.css'

export default function Work4() {
      const workData = [

    'Receive question',
    'Identify',
    'Find Answers',
    'Choose Suitable Answers',
    'Organizing',
    'Sending Answers'
  ];
  return (
    <div className='container_Work4'>
         <div className='top-content-work45'>
            {workData.map((content, index) => (
                <div key={index} className='workContainer'>
                <div className='work-content'>
                    <p>{content}</p>
                </div>
                </div>
            ))}
        </div>
    </div>
  )
}
