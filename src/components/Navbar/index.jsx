import React from 'react'
import NavbarStyle from "./Navbar.module.css"
import {BsCheckCircleFill, BsMapFill, BsListUl, BsChatLeftFill, BsGearFill} from "react-icons/bs"
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const NavbarItem = ({Icon, title, route}) => {
    const navigate = useNavigate()
    const redirect = () => {
      navigate(route)
    }
    return (
    <div className={NavbarStyle.navbar_item} onClick={redirect}>
      <Icon className={NavbarStyle.navbar_item_icon}/>
      <span>{title}</span>
    </div>)
  }
  return (
    <div className={NavbarStyle.navbar}>
      <NavbarItem Icon={BsCheckCircleFill} title="Check in/out" />
      <NavbarItem Icon={BsMapFill} title="Map/MCP" />
      <NavbarItem Icon={BsListUl} title="Tasks" />
      <NavbarItem Icon={BsChatLeftFill} title="Chat" />
      <NavbarItem Icon={BsGearFill} title="Settings" />
    </div>
  )
}

export default Navbar
