import React, { useState } from 'react'
import logo from '../../logo.svg'
import '../scss/Navbar.scss'

const Navbar = () => {

    const [nav,setNav] = useState(false)
    
    window.addEventListener('scroll',() => {
        if(window.scrollY >= 40 ){
            setNav(true)
        }else{
            setNav(false)
        }
    })

    return (
        <header className={`navbar ${nav && "active"}`}>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <nav>
                <ul>
                    <li><a href="#Movie">Movie's</a></li>
                    <li><a href="#Shows">TV Shows</a></li>
                    <li><a href="#Trending">Trending</a></li>
                    <li><a href="#Popular">Popular</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar