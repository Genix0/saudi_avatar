import React from 'react';
import './Work.css';
import arrow from '../../../images/HowWork/Arrow 9.png'
import arrow1 from '../../../images/HowWork/Arrow 8.png'

export default function Work() {
  const workData = [
    'Find Answers',
    // 'Receive question',
    // 'Organizing'
  ];

  

  return (
    <div>
        <div className='top-content-work'>
            {workData.map((content, index) => (
                <div key={index} className='workContainer'>
                <div className='work-content'>
                    <p>{content}</p>
                </div>
                </div>
            ))}
        </div>
        <div className='Arrow-content'>
            <img src={arrow1}></img>
        </div>
        <div className='top-content-work2'>
            {workData.map((content, index) => (
                <div key={index} className='workContainer2'>
                <div className='work-content22'>
                    <p>{content}</p>
                </div>
                </div>
            ))}
        </div>
    </div>
  );
}
