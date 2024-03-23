import React from 'react'
import payment1  from '../../../images/PaymentMethod/p1.png'
import payment2  from '../../../images/PaymentMethod/p2.png'
import payment3  from '../../../images/PaymentMethod/p3.png'
import payment4 from '../../../images/PaymentMethod/p4.png'
import './PaymentMethod.css'

export default function PaymentMethod() {
    return (
        <div className='allContainerOfPaymentMethod'>
            <p className='methodP'>Choose Payment Method</p>
            <div className='PaymentMethodButton'>
                <button><img src={payment1} alt='p1'></img></button>
                <button><img src={payment2} alt='p2'></img></button>
                <button><img src={payment3} alt='p3'></img></button>
                <button><img src={payment4} alt='p4'></img></button>
            </div>
            <p className='methodP'>Let’s Make Payment</p>
            <p className='descriptionAboutPaymentMethod'>
            To start your subscription, input your card details to make payment.<br></br>
            You will be redirected to your banks authorization page .
            </p>
        </div>
    )
}
