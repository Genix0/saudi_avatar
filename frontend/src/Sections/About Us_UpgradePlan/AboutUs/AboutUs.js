import React from 'react'
import './AboutUs.css'
import ButtonComponent from '../../../Components/ButtonComponent/ButtonComponent'
import image from '../../../images/about/about.png'
import { useNavigate } from 'react-router-dom'

export default function AboutUs() {
  const navigate = useNavigate()
  const AboutData = [
    {
      image: image,
      title: 'About Us',
      description: 'Saudi lawyer, justice advocate. Skilled in law from King Saud University. Protects client rights in Saudi legal landscape.'
  },
  ]
  const handleClicked = () =>{
    navigate('/chat')
  }
  return (
    <div className='about-container'>
      {AboutData.map((data, index) => (
        <div className="a-container">
          <div className="image-container-of-about">
            <img src={data.image} alt="Background" />
            <div className='emty_div'></div>
          </div>
          <div className="content-container">
            <div className='content-info'>
            <h1>{data.title}</h1>
            <p className='container-information-p'>{data.description}</p>
            <ButtonComponent buttonText="Chat Now " buttonType="AboutUsbutton" onClick={handleClicked}/>
          </div>
          </div>
        </div>
      ))}
  </div>
  )
}
