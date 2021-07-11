import React from 'react'
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
import './header.css'

function Header() {
  return (
    <div className="header">
      <div className="user-login">
        <AccountCircleSharpIcon fontSize="medium" color="action" />
      </div>
    </div>
  )
}

export default Header
