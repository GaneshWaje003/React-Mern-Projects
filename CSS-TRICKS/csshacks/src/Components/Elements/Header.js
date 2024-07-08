import React from 'react'
import '../css/header.css'

export default function Header({title}) {
  return (
    <div className='header-main'>
        <h1>{title} section</h1>
    </div>
  )
}
