import {useState} from 'react'
import { Calendar } from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { Userbar } from '../components';
import TasksStyle from "../styles/tasks.module.css"
import tasks from "../data/tasks.json"

const DailyTask = ({user, isChecked}) => {
  const [userTask, setUserTask] = useState(Object.values(tasks[user.id].dailyTask))
  return (
    <div className={TasksStyle.daily_container}>
      <ul>
        {userTask.map((task,idx) => (
          <li key={task.content}>
            •
            <span>{task.content}</span>
            <input type='checkbox' checked={idx == 0 ? isChecked: false}/>
          </li>
        ))}
      </ul>
    </div>
  )
}

const Tasks = ({user, isChecked}) => {
  return (
    <div className={TasksStyle.container}>
      <Userbar user={user}/>
      <Calendar />
      <h2>Today tasks</h2>
      <DailyTask user={user} isChecked={isChecked}/>
    </div>
  )
}

export default Tasks
