import React from 'react'
import cardOffre from '../../../../images/card/card.png'
import cardOffre2 from '../../../../images/card/card2.png'
import './../Plan.css'

export default function Offre() {
    const offreData = [
        'Interactive Chatbot',
        'Chatbot with video',
        'Infinity Questions',
        'Chat Support',
        'Invoice Generate',
        'Purchase Generate'
    ];
    const offreData2 = [
        ' Purchase Generate ',
    ];

    return (
        <div className='offre-container'>
            {offreData.map((offre, index) => (
                <div className='offre-content'>
                    <p>{offre}</p>
                    <img src={cardOffre} alt='offre' />
                </div>
            ))}
            {offreData2.map((offre2, index) => (
                <div className='offre2-content'>
                    <p>{offre2}</p>
                    <img src={cardOffre2} alt='offre' />
                </div>
            ))}
        </div>
    )
}
