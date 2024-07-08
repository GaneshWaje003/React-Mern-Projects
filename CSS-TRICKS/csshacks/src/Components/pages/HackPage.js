import React from 'react'
import Navbar from '../Elements/Navbar'
import '../css/csshacks.css'
import Header from '../Elements/Header'

export default function HackPage({codeType}) {
  return (
    <div className='hackPage-main'>
        
        <div className="navbar-hackpage">
            <Header title={codeType} />
        </div>

        <div className="hackpage-main-content">
            
            <div className="hackpage-card-container">
                
            </div>

        </div>

    </div>  
  )
}
