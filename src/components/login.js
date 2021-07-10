import React from 'react'
import './login.css'

function Login() {
  return (
    <div className="login">
      <div className="login-header">
        Login to your account
      </div>
      <div>
        <div className="input-box">
          <label htmlFor="email">
            Email or Username
          </label>
          <input id="email" type="text" />
        </div>
      </div>
      <div>
        <div className="input-box">
          <label htmlFor="password">
            Password
          </label>
          <input id="password" type="password" />
        </div>
      </div>
      <div>
        <button id="login" type="button">Login</button>
      </div>
    </div>
  )
}

export default Login
