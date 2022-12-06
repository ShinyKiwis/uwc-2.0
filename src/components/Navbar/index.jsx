import React, { useState } from 'react'
import NavbarStyle from "./Navbar.module.css"
import {BsCheckCircleFill, BsMapFill, BsListUl, BsChatLeftFill, BsGearFill} from "react-icons/bs"
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [selected, setSelected] = useState("")
  const NavbarItem = ({Icon, title, route}) => {
    const navigate = useNavigate()
    const redirect = () => {
      setSelected(title)
      console.log(route)
      navigate("/dashboard" + route)
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
      Icon: BsCheckCircleFill,
      route: '/attendance'
    },
    {
      title: "Map/MCP",
      Icon: BsMapFill,
      route: '/map'
    },
    {
      title: "Tasks",
      Icon: BsListUl,
      route: '/tasks'
    },
    {
      title: "Chat",
      Icon: BsChatLeftFill,
      route: '/chat'
    },
    {
      title: "Settings",
      Icon: BsGearFill,
      route: '/settings'
    }]
  return (
    <div className={NavbarStyle.navbar}>
      {
        items.map(item => (
          <NavbarItem Icon={item.Icon} title={item.title} route={item.route} key={item.title}/>
        ))
      }
    </div>
  )
}

export default Navbar
