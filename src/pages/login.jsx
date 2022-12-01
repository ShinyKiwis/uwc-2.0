import React, { useState } from 'react'
import LoginStyle from "../styles/login.module.css"
import employee from "../data/employee.json"

const Login = ({setAuth, setUser}) => {
  const [error, setError] = useState(false)

  const authenticate = (username, password, role) => {
    return username === role.username && password === role.password
  }

  const handleLogin = (e) => {
    e.preventDefault() 
    const username = e.target.username.value
    const password = e.target.password.value 
    console.log(username, password, employee.janitor, employee.collector)
    if(authenticate(username,password,employee.janitor)){
      setAuth(true)
      setUser(employee.janitor)
    }else if(authenticate(username,password,employee.collector)){
      setAuth(true)
      setUser(employee.collector)
    }else {
      setError(true)
    }
  }


  return (
    <div className={LoginStyle.container}>
      <img src="/login_background.png" alt="login background" />
      <h1>UWC 2.0</h1>
      {error &&  <span id={LoginStyle.message}>Invalid credential</span>}
      <form onSubmit={e => {handleLogin(e)}}>
        <input type="text" placeholder='Phone/Email' name="username"/>
        <input type="password" placeholder='Password' name="password"/>
        <button>Login</button>
        <div className={LoginStyle.form_actions}>
          <span>Forgot your password ?</span>
          <span>Change password ?</span>
        </div>
      </form>
    </div>
  )
}

export default Login
