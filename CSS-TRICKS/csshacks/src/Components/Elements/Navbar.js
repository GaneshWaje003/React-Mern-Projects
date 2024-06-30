import React from 'react'
import '../css/navbar.css'

export default function Navbar() {
    return (
        <div className='Navbar-main'>
            
            <nav>
                <div className="website-title-navbar">
                    <a href="#">CssHacks</a>
                </div>
                <ul>
                <a href="#">Home</a>
                <a href="#">Login</a>
                <a href="#">Hacks</a>
                <a href="#">upload hacks</a>
                </ul>
            </nav>

        </div>
    )
}
