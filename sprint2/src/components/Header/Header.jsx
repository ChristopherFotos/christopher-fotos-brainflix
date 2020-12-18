import React from 'react'
import { Route, Link } from "react-router-dom";
import logo from '../../assets/images/logo/logo.png'
import './Header.scss'

const Header =  () => {

    return (
        <header className = 'main-header'> 
            <Link to='/' className='flex'>
                <img src={logo} alt="" className="logo"></img>
            </Link>
            {/* <img src={logo} alt="" className="logo"></img> */}
            <input type="text" className="search-input" placeholder="Search"></input>
            <div className="main-header__upload-wrapper">
                <Link to = '/upload' className = 'cta-button' id='upload-link'>
                    <button className="cta-btn">
                        <img src="/assets/Icons/Icon-upload.svg" alt="" className="main-header__upload-icon"/>
                        UPLOAD
                    </button>
                </Link>
                <img src="./assets/Images/Mohan-muruge.jpg" className='avatar' alt=""></img>
            </div>      
        </header>     
    )
}

export default Header

