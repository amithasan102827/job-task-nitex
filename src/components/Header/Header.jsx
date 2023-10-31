import React from 'react'
import './Header.css'

const Header = () => {

    return (
        <nav className="navbar row">
            <div className="logo mb-md-0 mb-2 col-md-6">NITEX</div>
            <div className="menu pb-md-0 pb-2 col-md-6">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#service">Services</a></li>
                <li><a href="#product">Product</a></li>
            </div>
        </nav>
    )
}

export default Header


