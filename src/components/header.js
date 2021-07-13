import React, { useContext } from 'react'
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import './header.css'
import { LoginContext } from '../contexts/login-context'

function Header() {
  const [, setLoginCreds] = useContext(LoginContext)

  const handleLogout = () => {
    setLoginCreds({
      userId: '',
      password: '',
      isLoggedIn: false,
    })
  }

  return (
    <div className="header">
      <div className="user-login">
        <div className="user-icon">
          <AccountCircleSharpIcon fontSize="medium" color="action" />
          <div className="logout" onClick={handleLogout}>
            <ExitToAppIcon fontSize="small"/>
            <div className="logout-text">
              Logout
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
