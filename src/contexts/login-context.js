import React, { createContext, useState } from 'react'

export const LoginContext = createContext([{}, function() {}])

export const LoginContextProvider = ({ children }) => {
  const [loginCreds, setLoginCreds] = useState({
    userId: '',
    password: '',
    isLoggedIn: false,
  })
  return (
    <LoginContext.Provider value={[loginCreds, setLoginCreds]}>
      {children}
    </LoginContext.Provider>
  )
}
