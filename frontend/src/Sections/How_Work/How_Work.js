import React, { useEffect, useState } from 'react'
import Subtitle from './SubTitle/Subtitle'
import './How_Work.css'
import Work from './Work/Work'
import Work2 from './Work/Work2'
import Work3 from './Work/Work3'
import Work4 from './Work/Work4'

export default function How_Work() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
      const handleResize = () => {
          setIsSmallScreen(window.innerWidth <= 1200);
      };
      window.addEventListener('resize', handleResize);
      handleResize();
      return () => {
          window.removeEventListener('resize', handleResize);
      };
  }, []);

  return (
    <div className='how-Work-container'>
        <Subtitle/>
        {/* {!isSmallScreen ? 
        <div className='workk'>
            <Work/>
            <Work3/>
            <Work2/>
        </div>
        : */}
        <div>
          <Work4/>
        </div>
        {/* } */}
    </div>
  )
}