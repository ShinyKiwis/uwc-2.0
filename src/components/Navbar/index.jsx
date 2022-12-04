import React, { useState } from 'react'
import NavbarStyle from "./Navbar.module.css"
import {BsCheckCircleFill, BsMapFill, BsListUl, BsChatLeftFill, BsGearFill} from "react-icons/bs"
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [selected, setSelected] = useState("Check in/out")
  const NavbarItem = ({Icon, title, route}) => {
    const navigate = useNavigate()
    const redirect = () => {
      setSelected(title)
      navigate(route)
    }
    return (
    <div className={NavbarStyle.navbar_item} 
        onClick={redirect} 
        style={selected === title ? {color: "#1481dd"}: {}}>
      <Icon className={NavbarStyle.navbar_item_icon}/>
      <span>{title}</span>
    </div>)
  }
  const items = [
    {
      title: "Check in/out",
      Icon: BsCheckCircleFill
    },
    {
      title: "Map/MCP",
      Icon: BsMapFill
    },
    {
      title: "Tasks",
      Icon: BsListUl
    },
    {
      title: "Chat",
      Icon: BsChatLeftFill
    },
    {
      title: "Settings",
      Icon: BsGearFill
    }]
  return (
    <div className={NavbarStyle.navbar}>
      {
        items.map(item => (
          <NavbarItem Icon={item.Icon} title={item.title} key={item.title}/>
        ))
      }
    </div>
  )
}

export default Navbar
