import React from 'react'
import '../css/login.css'
import loginSvg from  '../img/login_icon.svg'
import  loginPasswordLogo from  '../img/key_svg.svg'
import loginUsernameLogo from  '../img/login_logo.svg'
import googleLogo from  '../img/google_logo.svg'
import facebookLogo from  '../img/facebook_logo.svg'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='Login-main'>

    <div className="login-form-section">

      <div className="header-section">
        <h1>Login</h1>
        <p>login to access all features of the cssHacksand get <br /> the awesome ui elements for free</p>
      </div>

      <div className="form-section">

      <form action="">

        <div className="label-username">
        <p>username</p>
        </div>
        <div className="input-container input-username">
          <img src={loginUsernameLogo} alt="" />
          <input type="text" placeholder='username' />
        </div>
        <div className="label-username">
        <p>password</p>
        </div>        
        <div className="input-container input-password">
          <img src={loginPasswordLogo} alt="" />
          <input type="text" placeholder='password' />
        </div>
        
        <div className="forgot-password">
          <a href="#">forgot password</a>
          </div>

          <div className="form-submit-btn">
            <input type='submit' value='Login'/>
          </div>

      <div className="login-with-social-media">

        <div className="login-with-google meta-login-container"><img src={googleLogo} alt="google" /><a href="#">Login with google</a></div>
        <div className="login-with-facebook meta-login-container"><img src={facebookLogo} alt="facebook" /><a href="#">Login with facebook</a></div>

      </div>

      <div className="not-registered">
        <p>don't have account ? </p>
        <Link to='/register' > register </Link>
      </div>

      </form>
      </div>

    </div>
    <div className="login-design-section">
      <img src={loginSvg} alt="" />
    </div>

    </div>
  )
}
