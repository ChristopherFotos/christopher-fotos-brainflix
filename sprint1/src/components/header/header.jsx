import React from 'react'
import logo from '../../assets/images/logo/logo.png'
import './Header.scss'

const Header =  () => {

    return (
        <header className = 'main-header'> 
            <img src={logo} alt="" className="logo"></img>
            <input type="text" className="search-input" placeholder="Search"></input>
            <div className="main-header__upload-wrapper">
                <button className="cta-btn">UPLOAD</button>
                <img src="./assets/Images/Mohan-muruge.jpg" className='avatar' alt=""></img>
            </div>      
        </header>     
    )
}

export default Header

