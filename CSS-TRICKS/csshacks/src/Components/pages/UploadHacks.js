import React, { useState } from 'react'
import '../css/uploadHacks.css'
import Navbar from '../Elements/Navbar';

export default function UploadHacks() {
  
  const [uploadData,setUploadData] = useState({
    lang:'',
    title:'',
    code:'',
  });
  
  const getInformation = (e)=>{
    
    const {name,value} = e.target;
    
    setUploadData({ 

    })
  }
  
  return (
    <div className='uploadhack-main'>

      <div className="navbar-container-uploadhack">
        <Navbar />
      </div>


      <div className="container-form">

      <div className="main-content-uploadhack">

        <div className="header-uploadhacks">
            <h1>Upload File to CssHack</h1>
            <p>upload your files to csshacks</p>
            <p>powered by sk deveops</p>
        </div>

        <div className="upload-button-uploadhack">
          <button>Select File </button>
        </div>

        <div className="drop-file">
          <p>or drop file here</p>
        </div>

      </div>
        
      </div>

    </div>
  )
}
