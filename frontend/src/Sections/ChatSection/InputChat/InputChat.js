import React, { useState } from 'react';
import hh from '../../../images/Banner/hh.png';
import arrow from '../../../images/Banner/arrow.png';
import chine from '../../../images/Banner/chine.png';
import arabic from '../../../images/Banner/arabic.png';
import mic from '../../../images/Banner/icon (8).png';
import './InputChat.css';

export default function InputChat({ inputText, setInputText, handleHhImageClick }) {
    const [text, setText] = useState('');

    const handleInputChange = (event) => {
        setText(event.target.value);
        setInputText(event.target.value);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            setInputText(inputText + '\n');
        }
    };


    return (
        <div className='input-chat'>
            <div className='input-all'>
                <div className="input-chat-container">
                    <img src={hh} alt='hh' />
                    <div className="input-wrapper">
                        <textarea
                            value={inputText}
                            onChange={handleInputChange}
                            onKeyDown={handleKeyPress}
                            placeholder="What’s in your mind?..."
                            className='chat-input'
                        />
                    </div>
                    <button className='btn-hh' onClick={handleHhImageClick} ><img src={arrow} alt='hh' /></button>
                </div>
                <img src={mic} alt='mic'></img>
                <img src={arabic} alt='arabic'></img>
                <img src={chine} alt='chine'></img>
            </div>
        </div>
    );
}
