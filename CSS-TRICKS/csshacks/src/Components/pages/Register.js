import React from 'react'
import '../css/register.css'

export default function Register() {
  return (
    <div className='register-main'>

        <div className="register-data-section">
            <div className="header">
                <h1>Register</h1>
            </div>

            <div className="form-section-register">
                <form action="">
                    <div className="input-section-register">

                    <input type="text" placeholder='name' />
                    <input type="text" placeholder='email' />
                    <input type="text" placeholder='username'/>
                    <input type="text" placeholder='password'/>
                    <input type="submit" className='submit-btn-register' value="Register" />
                    </div>

                </form>
            </div>

        </div>

        <div className="register-img-section">

        </div>

    </div>
  )
}
