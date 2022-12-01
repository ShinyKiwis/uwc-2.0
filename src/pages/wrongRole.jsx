import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BackButton } from '../components'
import WrongRoleStyle from "../styles/wrongRole.module.css"

const WrongRole = () => {
  const navigate = useNavigate()
  const backToSelection = () => {
    navigate("/")
  }

  const reportError = () => {
    alert("The service is not available at the moment!")
  }
  return (
    <div className={WrongRoleStyle.container}>
      <BackButton route="/"/>
      <div className={WrongRoleStyle.message}>
        <h1>oops, something went wrong...</h1>
        <h1>Maybe you are not</h1>
        <h1>this type of employee</h1>
      </div>
      <div className={WrongRoleStyle.button_list}>
        <button onClick={backToSelection}>Back to user selection</button>
        <button onClick={reportError}>Report error</button>
      </div>
    </div>
  )
}

export default WrongRole
