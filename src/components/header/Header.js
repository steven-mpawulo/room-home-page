import React from 'react'
import Logo from '../../images/logo.svg'

const Header = () => {
    return (
        <header>
            <img src={Logo} alt="logo" />
            <ul>
                <li><a href="#home">home</a></li>
                <li><a href="#shop">shop</a></li>
                <li><a href="#about">about</a></li>
                <li><a href="#contact">contact</a></li>
            </ul>
        </header>
    )
}

export default Header