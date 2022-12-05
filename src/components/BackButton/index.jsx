import React from 'react'
import {BiChevronLeft} from "react-icons/bi"
import { useNavigate } from 'react-router-dom'
import BackButtonStyle from "./BackButton.module.css"

const BackButton = ({setState, route}) => {
  const navigate = useNavigate()
  const handleRedirect = () => {
    navigate(route)
  }
  return (
    <button onClick={setState ? ()=>{setState(false)} : handleRedirect} 
      className={BackButtonStyle.back_button}>
      <BiChevronLeft id={BackButtonStyle.back_button_icon}/>
    </button>
  )
}

export default BackButton
