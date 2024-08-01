import React from 'react'
import Navbar from '../Elements/Navbar'
import { useLocation } from 'react-router-dom'


export default function HackInfo() {
  
  // location = useLocation();
  // const {state}= location;
  // const {name,code}=state || {};
  
  return (
    <div className='main-hackinfo' >

      <div className="navbar-hackinfo">
        <Navbar/>
      </div>


        {/* <h1>{name}</h1>
        <h1>{code}</h1> */}
    </div>
  )
}
