import React from 'react'
import saudiAvatar from '../../images/Banner/saudiAvatar.png'
import './ComplementBanner.css'
import ButtonComponent from '../ButtonComponent/ButtonComponent'
import { Navigate, useNavigate } from 'react-router-dom'

export default function ComplementBanner() {
    const navigate = useNavigate();

    const ChatButton = () => {
        navigate('/chat')
    }

    return (
        <div className="containerOfSaudi">
            <div className='buttonInfo'>
                <p className='bannerInfo'>Saudi lawyer, justice advocate in law from King Saud University.</p>
                <p className='banner-p-info'>Earum magnam incidunt autem. Illo autem sapiente beatae velit iure quisquam consequatur provident. At dolores quisquam delectus officia et totam omnis. Aut non voluptatem voluptatem dolores.
                    Et natus dicta explicabo optio. Odio illum omnis excepturi doloremque. Porro hic qui delectus. Accusantium sunt id et id non laborum numquam beatae distinctio. Accusantium deleniti dolorem fuga aut dolorem. Aspernatur vel id on.</p>
                <ButtonComponent buttonType='containerButton' buttonText='Chat Now' onClick={ChatButton}/>
            </div>
            <div>
                <img src={saudiAvatar} alt='saudiAvatar' className='saudiAvatar'></img>
            </div>
        </div>
    )
}
