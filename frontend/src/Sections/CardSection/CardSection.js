import React from 'react'
import './CardSection.css'
import IMG1 from '../../images/Section2/img1.png'
import IMG2 from '../../images/Section2/img2.png'
import IMG3 from '../../images/Section2/img3.png'

export default function CardSection() {

    const dummyData = [
        {
            image: IMG1,
            title: '125 Profitable cases',
            description: 'Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'
        },
        {
            image: IMG2,
            title: '24*7 Customer Support',
            description: 'Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'
        },
        {
            image: IMG3,
            title: 'Safe Packaging',
            description: 'Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'
        }
    ];


    return (
        <div className='cardContainer'>
            {dummyData.map((item, index) => (
                <div key={index} className='cardContent'>
                    <img src={item.image} alt="Card" />
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    )
}
