import React from 'react'
import './../Footer.css'
import Message from '../../../images/Footer/message.png'
import ButtonComponent from '../../ButtonComponent/ButtonComponent'
import { useNavigate } from 'react-router-dom'

export default function TopFooter() {
  const navigate = useNavigate()
  const handleClicked = ()=>{
    navigate('/chat')
  }
  return (
    <div className='ContainerTopFooter'>
        <div className='ContentLeft'>
            <img alt='message' src={Message}></img>
            <div>
                <h3>Have any Question?</h3>
                <p>Ask Me Any Question and about law and get a very fast answer.</p>
            </div>
        </div>
            <ButtonComponent buttonText='Chat Now' buttonType='FooterButton' onClick={handleClicked}/>
    </div>
  )
}
