import React, { useState } from 'react'
import NavbarStyle from "./Navbar.module.css"
import {BsCheckCircleFill, BsMapFill, BsListUl, BsChatLeftFill, BsGearFill} from "react-icons/bs"
import {RiTruckFill} from "react-icons/ri"
import { useNavigate } from 'react-router-dom'

const Navbar = ({user}) => {
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
  const janitor_items = [
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
  const collector_items = [
    {
      title: "Check in/out",
      Icon: BsCheckCircleFill,
      route: '/attendance'
    },
    {
      title: "Vehicles",
      Icon: RiTruckFill,
      route: '/vehicles'
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
    }
  ]
  const items = user.type === "janitor" ? janitor_items : collector_items
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
