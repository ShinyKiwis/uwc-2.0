import React from 'react'
import RoleStyle from "../styles/role.module.css"
import {useNavigate} from "react-router-dom"
import { BackButton } from '../components'

const Role = ({user, setAuth}) => {
  const navigate = useNavigate()

  const handleRole = (e) => {
    const seletedRole = e.target.innerHTML 
    if(seletedRole.toLowerCase() === user.type) {
      navigate('/dashboard')
    }else {
      navigate('/wrong_role')
    }
  }
  return (
    <div className={RoleStyle.container}>
      <BackButton setAuth={setAuth}/>
      <h1>UWC 2.0</h1>
      <h2>Login as </h2>
      <div className={RoleStyle.button_list}>
        <button onClick={e => {handleRole(e)}}>Janitor</button>
        <button onClick={e => {handleRole(e)}}>Collector</button>
        <button onClick={e => {handleRole(e)}}>Manual User</button>
      </div>
      <h2>Hotline: 123 4356 7890</h2>
    </div>
  )
}

export default Role
