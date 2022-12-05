import { useState } from "react";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Userbar } from "../components";
import TasksStyle from "../styles/tasks.module.css";
import tasks from "../data/tasks.json";

const DailyTask = ({ user, isChecked }) => {
  const [userTask, setUserTask] = useState(
    Object.values(tasks[user.id].dailyTask)
  );
  const [isFinished, setIsFinished] = useState([]);
  return (
    <div className={TasksStyle.daily_container}>
      <ul>
        {userTask.map((task, idx) => (
          <li key={task.content}>
            •<span>{task.content}</span>
            <input
              type="checkbox"
              checked={idx === 0 ? isChecked : isFinished.includes(task.content)}
              onChange={() => {
                if(!isFinished.includes(task.content)){
                  setIsFinished([...isFinished, task.content]);
                }else{
                  setIsFinished(isFinished.filter(item => item !== task.content))
                }
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

const Tasks = ({ user, isChecked }) => {
  return (
    <div className={TasksStyle.container}>
      <Userbar user={user} />
      <Calendar />
      <h2>Today tasks</h2>
      <DailyTask user={user} isChecked={isChecked} />
      <h2>This week tasks</h2>
      <DailyTask user={user} isChecked={isChecked} />
    </div>
  );
};

export default Tasks;
