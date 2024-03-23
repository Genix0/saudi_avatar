import React, { useState } from 'react';
import arrowDown from '../../../images/AppSection/Chevron Down.png'
import arrowUp from '../../../images/AppSection/Chevron Up.png'
import './VersionChat.css'
const names = ['Version 1.0', 'Version 2.0'];

export default function VersionChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [version, setVersion] = useState(names[0]);

  const handleChange = (event) => {
    setVersion(event.target.value);
  };

  const toggleSelect = () => {
    setIsOpen(!isOpen);
  };

  // const arrowDown = <span>&#x25BC;</span>;
  // const arrowUp = <span>&#x25B2;</span>; 

  return (
    <div className='v-e'>
      <div htmlFor="version" onClick={toggleSelect} className='versionDiv'>
        <p>Select Version </p>
        <img src={isOpen ? arrowUp : arrowDown} alt="Arrow" className='Arrow'/>
      </div>
      <div id="version">
        {isOpen && (
          <div className='allversion'>
            {names.map((name) => (
              <div className='content-radio-version'>
                <p key={name}>{name}</p>
                <input
                type="radio"
                name="version"
                value={name}
                checked={version === name}
                onChange={handleChange}
                className='radioclass'
              />
            </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
