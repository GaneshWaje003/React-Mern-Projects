import React from 'react'
import '../css/navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className='Navbar-main'>
            
            <nav>
                <div className="website-title-navbar">
                    <a href="#">CssHacks</a>
                </div>
                <ul>
                <Link to={'/'} >Home</Link>
                <Link to={'/login'} >Login</Link>
                <Link to={'/'} >about</Link>
                <Link to={'/'} >upload hacks</Link>
                </ul>
            </nav>

        </div>
    )
}
