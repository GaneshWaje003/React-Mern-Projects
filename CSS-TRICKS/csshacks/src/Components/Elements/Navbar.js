import React, { useEffect, useRef, useState } from 'react'; import '../css/navbar.css'
import { Link } from 'react-router-dom'
import searchLogo from '../img/search.svg'
import loginLogo from '../img/login_icon.svg'

export default function Navbar() {

    const userLogoRef = useRef(null);

    const [toshow, setToshow] = useState(false);

    const toggleDropdown = () => {
        setToshow(prev => !prev);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (userLogoRef.current && !userLogoRef.current.contains(event.target)) {
                setToshow(false);
            }
        };

        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutside);

        // Cleanup the event listener on component unmount
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [userLogoRef]);



    return (
        <div className='Navbar-main'>

            <nav>

                <div className="header-links-container">


                    <div className="website-title-navbar">
                        <Link to={'/'} >CssHacks</Link>
                    </div>
                    <ul>
                        <li>
                            <Link to={'/'} >Home</Link>
                        </li>
                        <li>
                            <Link to={'/login'} >Login</Link>
                        </li>

                        <li>
                            <Link to={'/'} >about</Link>
                        </li>
                        <li>
                            <Link to={'/uploadPage'} >upload hacks</Link>

                        </li>
                    </ul>
                </div>

                <div className="navbar-left-components">

                    <div className="searchbar-navbar">
                        <img src={searchLogo} alt="" />
                        <input placeholder='Search' type="search" />
                    </div>

                    <div className="icons-section">
                        <i className='msg-icon' ><svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 7.2C3 6.07989 3 5.51984 3.21799 5.09202C3.40973 4.71569 3.71569 4.40973 4.09202 4.21799C4.51984 4 5.0799 4 6.2 4H17.8C18.9201 4 19.4802 4 19.908 4.21799C20.2843 4.40973 20.5903 4.71569 20.782 5.09202C21 5.51984 21 6.0799 21 7.2V20L17.6757 18.3378C17.4237 18.2118 17.2977 18.1488 17.1656 18.1044C17.0484 18.065 16.9277 18.0365 16.8052 18.0193C16.6672 18 16.5263 18 16.2446 18H6.2C5.07989 18 4.51984 18 4.09202 17.782C3.71569 17.5903 3.40973 17.2843 3.21799 16.908C3 16.4802 3 15.9201 3 14.8V7.2Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        </i>

                        <i className='vertical-line'></i>

                        <i className='menu-grid-icon'>
                            <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M8 6C8 7.10457 7.10457 8 6 8C4.89543 8 4 7.10457 4 6C4 4.89543 4.89543 4 6 4C7.10457 4 8 4.89543 8 6Z"
                                fill="#000000"
                            />
                            <path
                                d="M8 12C8 13.1046 7.10457 14 6 14C4.89543 14 4 13.1046 4 12C4 10.8954 4.89543 10 6 10C7.10457 10 8 10.8954 8 12Z"
                                fill="#000000"
                            />
                            <path
                                d="M6 20C7.10457 20 8 19.1046 8 18C8 16.8954 7.10457 16 6 16C4.89543 16 4 16.8954 4 18C4 19.1046 4.89543 20 6 20Z"
                                fill="#000000"
                            />
                            <path
                                d="M14 6C14 7.10457 13.1046 8 12 8C10.8954 8 10 7.10457 10 6C10 4.89543 10.8954 4 12 4C13.1046 4 14 4.89543 14 6Z"
                                fill="#000000"
                            />
                            <path
                                d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
                                fill="#000000"
                            />
                            <path
                                d="M14 18C14 19.1046 13.1046 20 12 20C10.8954 20 10 19.1046 10 18C10 16.8954 10.8954 16 12 16C13.1046 16 14 16.8954 14 18Z"
                                fill="#000000"
                            />
                            <path
                                d="M18 8C19.1046 8 20 7.10457 20 6C20 4.89543 19.1046 4 18 4C16.8954 4 16 4.89543 16 6C16 7.10457 16.8954 8 18 8Z"
                                fill="#000000"
                            />
                            <path
                                d="M20 12C20 13.1046 19.1046 14 18 14C16.8954 14 16 13.1046 16 12C16 10.8954 16.8954 10 18 10C19.1046 10 20 10.8954 20 12Z"
                                fill="#000000"
                            />
                            <path
                                d="M18 20C19.1046 20 20 19.1046 20 18C20 16.8954 19.1046 16 18 16C16.8954 16 16 16.8954 16 18C16 19.1046 16.8954 20 18 20Z"
                                fill="#000000"
                            />

                        </svg>
                            {toshow && <ol>
                                <li><Link to={'/'} >Profile</Link></li>
                                <li><Link to={'/'} >dark mode   </Link></li>
                                <li><Link to={'/'} >setting</Link></li>
                                <li><Link to={'/'} >Logout</Link></li>

                            </ol>
                            }

                        </i>

                        <i className='user-logo' ref={userLogoRef}>
                            <img src={loginLogo} alt="" onClick={toggleDropdown} />
                            {toshow && <ol>
                                <li><Link to={'/'} >Profile</Link></li>
                                <li><Link to={'/'} >dark mode   </Link></li>
                                <li><Link to={'/'} >setting</Link></li>
                                <li><Link to={'/'} >Logout</Link></li>

                            </ol>
                            }
                        </i>

                    </div>

                </div>
            </nav>

        </div>
    )
}
