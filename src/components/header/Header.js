import React from 'react'
import Logo from '../../images/logo.svg'
import './header.css'

const Header = () => {
    return (
        <header>
            <img src={Logo} alt="logo" />
            <nav>
            <ul>
                <li><a href="#home">home</a></li>
                <li><a href="#shop">shop</a></li>
                <li><a href="#about">about</a></li>
                <li><a href="#contact">contact</a></li>
            </ul>
            </nav>
        </header>
    )
}

export default Header