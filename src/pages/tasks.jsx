import React from 'react'
import { Calendar } from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { Userbar } from '../components';
import TasksStyle from "../styles/tasks.module.css"

const Tasks = ({user}) => {
  return (
    <div className={TasksStyle.container}>
      <Userbar user={user}/>
      <Calendar />
    </div>
  )
}

export default Tasks
