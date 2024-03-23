import React from 'react'
import './PlanCard.css'
import Offre from './Offre'
import ButtonComponent from '../../../../Components/ButtonComponent/ButtonComponent'
import { useNavigate } from 'react-router-dom'

export default function PlanCard() {
  const navigate = useNavigate()
  const handleClicked = ()=>{
    navigate('/payment')
  }
  return (
    <div className='container_Card_Plan'>
        <button className='AddvanceButton'>Advance</button>
        <h3> $ 9 </h3>
        <span> User / Month </span>
        <Offre/>
        <ButtonComponent buttonType='SecondaryButton' buttonText='Upgrade your plan' onClick={handleClicked}/>
    </div>
  )
}
