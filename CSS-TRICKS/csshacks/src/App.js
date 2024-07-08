import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Elements/Navbar';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import flutter_logo from '../src/Components/img/flutter_logo.jpeg'
import css_logo from '../src/Components/img/css_logo.jpeg'
import android_logo from '../src/Components/img/android_logo.jpeg'

function App() {

  const navigate =useNavigate(); 

  const slidingSectionItems1 = ["How to circle div" , "how to use grid layout" , "how to center div","how to create navbar"]
  const slidingSectionItems2= ["Flutter navbar" , "Flutter menu" , "Flutter containers","Flutter table","Flutter calender" ,"Flutter toast"]
  const mainSectionTwoList = [
    {title: "Flutter Hacks" , img:flutter_logo }, 
    {title: "css Hacks" , img:css_logo }, 
    {title: "android Hacks" , img:android_logo }, 
    {title: "cpp Hacks" , img:flutter_logo }, 
  ]

  const openHacks =(parent)=>{
      if(parent == 0){
            navigate('/toFlutterHacks')
      }
      else if(parent == 1){
            navigate('/toCssHacks')
      }
      else if(parent == 2){
            navigate('/toAndroidHacks')
      }
      else{
            navigate('/toFlutterHacks')
      }
  }

  const targetRef = useRef(null);

  const scrollTONextDiv = ()=>{
    if(targetRef.current){
      targetRef.current.scrollIntoView({behavior:'smooth'});
    }
  }

  return (


    <div className="App-root">
      <div className="navbar-container-app-main">
        <Navbar />
      </div>
    <div className="App-main">


      <main className='main-section'>

        <div className="text-hero-section hero-one">

          <div className='sliding-section-container'>
              {
                slidingSectionItems1.map((item)=>(
                    <div className='sliding-section-child'>
                      
                      <p>{item}</p>
                    </div>
                ))
              }
          </div>

        </div>

        <div className="text-hero-section hero-two">

          <div className="text-part">
            <p>Welcome to </p>
            <p>cssHacks</p>
            <p>get free ui elements code</p>
          </div>

          <div className="get-started-button">
            <button onClick={()=>scrollTONextDiv()} >Get Started</button>
          </div>

        </div>

        <div className="text-hero-section hero-three">

        <div className='sliding-section-container'>
              {
                slidingSectionItems2.map((item)=>(
                    <div className='sliding-section-child'>
                      <p>{item}</p>
                    </div>
                ))
              }
          </div>

        </div>

      </main>


    </div>

    <div ref={targetRef} id="targetDiv" className="main-section-two">

          <div className="choose-section">
            <p>choose one of following</p>
          </div>

          <div className="card-container-main-section-two">
                  {
                    mainSectionTwoList.map((item,index)=>(
                        <div
                        key={`key${index}`}
                        id ={`child-card-${index}`} 
                        className="child-card-main-section-two"  
                        onClick={()=>openHacks(index)}>
                          <img src={item.img} alt="" />
                        <p>{item.title}</p>
                      </div>
                    ))
                  }

          </div>


    </div>



    </div>
  );
}

export default App;
