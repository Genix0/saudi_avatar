import React, { useState } from 'react';
import './Header.css';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import logo from '../../images/Banner/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Login from '../../Sections/Users/Login/Login';
import Signup from '../../Sections/Users/Signup/Signup';
import UpgradePlan from '../../Sections/UpgradePlan/UpgradePlan';
import { useNavigate } from 'react-router-dom';
import { Modal } from '@mui/material';

export default function Header() {
    const [menuVisible, setMenuVisible] = useState(false);
    const [language, setLanguage] = useState('english');
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleOpen2 = () => setOpen2(true);
    const handleOpen3 = () => setOpen3(true);
    const handleClose = () => setOpen(false);
    const handleClose2 = () => setOpen2(false);
    const handleClose3 = () => setOpen3(false);

    const handleHomeNavigate = () => {
        navigate('/')
    }

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const closeMenu = () => {
        setMenuVisible(false);
    };
    const toggleLanguage = () => {
        setLanguage(language === 'english' ? 'arabic' : 'english');
    };
    const handleUpgradePlanClick = () => {
        const upgradePlanSection = document.getElementById('upgradePlan');
        upgradePlanSection.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div className='containerHeader'>
            <div className='logoContainer'>
                <img src={logo} alt="Logo" />
            </div>
            {/* Show menu icon only on small screens */}
            <div className='menuIcon' onClick={toggleMenu}>
                <FontAwesomeIcon icon={menuVisible ? faBars : faBars} />
            </div>
            {/* Show menu on small screens */}
            <div className={` ${menuVisible ? 'menu visible' : 'NotVisible'}`}>
                {/* Add other menu items as needed */}
                <div className="closeButton" onClick={closeMenu}>
                    <FontAwesomeIcon icon={faTimes} />
                </div>
                {/* Language switcher */}
                <div className='btnAuth_btnmain'>
                    <h2 onClick={handleHomeNavigate}>Home</h2>
                    <div className='btnAuth'>
                        <button className='loginBtn' onClick={handleOpen}>Login</button>
                        <Modal
                            aria-labelledby="unstyled-modal-title"
                            aria-describedby="unstyled-modal-description"
                            disablePortal
                            disableEnforceFocus
                            disableAutoFocus
                            open={open}
                            onClose={handleClose}
                            className='model-pop'
                        >
                            <Login />
                        </Modal>

                        <p className='btnAuth-p'>/</p>
                        <button className='signupBtn' onClick={handleOpen2}>Signup</button>
                        <Modal
                            aria-labelledby="unstyled-modal-title"
                            aria-describedby="unstyled-modal-description"
                            disablePortal
                            disableEnforceFocus
                            disableAutoFocus
                            open={open2}
                            onClose={handleClose2}
                            className='model-pop'
                        >
                            <Signup />
                        </Modal>
                    </div>
                </div>
                <button className='languageBtn' onClick={toggleLanguage}>
                    {language === 'english' ? 'English' : 'Arabic'}
                </button>
                {!menuVisible ? (
                    <>
                        <ButtonComponent buttonText='Upgrade Your Plan' buttonType='SecondaryButton' onClick={handleOpen3} />
                        <Modal
                            aria-labelledby="unstyled-modal-title"
                            aria-describedby="unstyled-modal-description"
                            disablePortal
                            disableEnforceFocus
                            disableAutoFocus
                            open={open3}
                            onClose={handleClose3}
                            className='model-pop'
                        >
                            <UpgradePlan />
                        </Modal>
                    </>
                ) : (
                    <ButtonComponent buttonText='Upgrade Your Plan' buttonType='SecondaryButton' onClick={handleUpgradePlanClick} />
                )}
            </div>
        </div>
    );
}
