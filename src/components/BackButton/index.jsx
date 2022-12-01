import React from 'react'
import {BiChevronLeft} from "react-icons/bi"
import { useNavigate } from 'react-router-dom'
import BackButtonStyle from "./BackButton.module.css"

const BackButton = ({setAuth, route}) => {
  const navigate = useNavigate()
  const handleRedirect = () => {
    navigate(route)
  }
  return (
    <button onClick={setAuth ? ()=>{setAuth(false)} : handleRedirect} 
      className={BackButtonStyle.back_button}>
      <BiChevronLeft id={BackButtonStyle.back_button_icon}/>
    </button>
  )
}

export default BackButton
