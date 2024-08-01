import React, { useEffect, useState } from 'react'
import Navbar from '../Elements/Navbar'
import '../css/csshacks.css'
import { useNavigate } from 'react-router-dom'
import Header from '../Elements/Header'
import flutter_logo from '../img/flutter_logo.jpeg'
import css_logo from '../img/css_logo.jpeg'
import android_logo from '../img/android_logo.jpeg'

export default function HackPage({codeType}) {

  const [data,setData] = useState([]);
  const [cardImg,setCardImg] = useState(null);
  const navigater = useNavigate();

  const openInfoPage = (name,code) => {
    navigater(`/hackinfo`,{state:{name,code}}); 
  }


  useEffect(()=>{

    if(codeType == 'flutters'){
      setCardImg(flutter_logo);
    }else if(codeType == 'csses'){
      setCardImg(css_logo);
    }else{
      setCardImg(android_logo);
    }


    fetch(`http://localhost:4000/readData/${codeType}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); 
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
              <div 
              onClick={()=>openInfoPage(item.name,item.code)}
               key={item.id}  
               className="hackpage-card-container">
                  <img src={cardImg} alt="" />
                  <p>{item.name}</p>
              </div>
            ))
          
        }</div>

    </div>  
  )
}
