import React, { useEffect, useState } from 'react'
import Navbar from '../Elements/Navbar'
import '../css/csshacks.css'
import Header from '../Elements/Header'

export default function HackPage({codeType}) {

  const [data,setData] = useState([]);
  
  useEffect(()=>{
    fetch(`http://localhost:4000/readData/${codeType}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // Parse the JSON body of the response
    }).then(data=>{
        setData(data);
        console.log(data);
      }).catch((err)=>{
      console.log("Error occure white recieving data at frontend");
    })
  },[codeType])
  
  return (
    <div className='hackPage-main'>
        
        <div className="navbar-hackpage">
            <Header title={codeType} />
        </div>

        <div className="hackpage-main-content">{

            data.map((item,index)=>(
              <div key={item.id}  className="hackpage-card-container">
                  <p>{item.name}</p>
              </div>
            ))
          
        }</div>

    </div>  
  )
}
