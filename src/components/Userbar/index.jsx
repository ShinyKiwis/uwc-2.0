import React from 'react'
import {BsSearch} from "react-icons/bs"
import UserbarStyle from "./Userbar.module.css"

const Userbar = ({user}) => {
  return (
    <div className={UserbarStyle.container}>
      <div className={UserbarStyle.search_container}>
        <BsSearch color='#1481dd' />
        <input type="text" placeholder='search tasks'/>
      </div>
      <div className={UserbarStyle.user_container}>
        <div className={UserbarStyle.user_info}>
          <span>{user.name}</span>
          <span>{user.id}</span>
        </div>
        <img src={user.imgSrc} alt="user avatar" />
      </div>
    </div>
  )
}

export default Userbar
