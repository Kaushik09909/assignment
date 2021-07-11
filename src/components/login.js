import React, { useContext } from 'react'
import { LoginContext } from '../contexts/login-context'
import './login.css'
import data from '../loginCreds.json'

function Login() {
  const [loginCreds, setLoginCreds] = useContext(LoginContext)

  const setCreds = (e) => {
    const { value } = e.target
    if (e.target.id === 'email') {
      setLoginCreds({
        ...loginCreds,
        userId: value
      })
    } else if (e.target.id === 'password') {
      setLoginCreds({
        ...loginCreds,
        password: value
      })
    }
  }

  const onLogin = () => {
    if (loginCreds.userId === data.userId && loginCreds.password === data.password) {
      setLoginCreds({
        ...loginCreds,
        isLoggedIn: true
      })
    }
  }

  return (
    <div className="app">
      <div className="login">
        <div className="login-header">
          Login to your account
        </div>
        <div>
          <div className="input-box">
            <label htmlFor="email">
              Email or Username
            </label>
            <input id="email" value={loginCreds.userId} onChange={setCreds} type="text" />
          </div>
        </div>
        <div>
          <div className="input-box">
            <label htmlFor="password">
              Password
            </label>
            <input id="password" value={loginCreds.password} onChange={setCreds} type="password" />
          </div>
        </div>
        <div>
          <button className="button" id="login" type="button" onClick={onLogin}>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Login
