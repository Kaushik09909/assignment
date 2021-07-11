import React, { useContext } from 'react'
import './App.css'
import Login from './components/login'
import Table from './components/table'
import { LoginContext } from './contexts/login-context'

function App() {
  const [loginCreds] = useContext(LoginContext)
  console.log(loginCreds.isLoggedIn)
  return (
    <div>
        { loginCreds.isLoggedIn ? <Table /> : <Login /> }
    </div>
  );
}

export default App;
