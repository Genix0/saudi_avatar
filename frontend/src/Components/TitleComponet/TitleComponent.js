import React from 'react'
import './TitleComponent.css'

export default function TitleComponent({ TitleText, TitleSpan, styleText }) {

    const buttonClass =
        styleText === 'text-container'
            ? 'text-container'
            : 'big-text'

    return (
        <div className={buttonClass}>
            <span className='coloredText'>{TitleSpan}  </span>
            <p className='regularText'> {TitleText}</p>
        </div>
    )
}

