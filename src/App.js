import { useState } from 'react';
import './App.css';
import { Login, Role, WrongRole, Dashboard, CheckAttendance, Tasks, Settings, Chat } from './pages';
import {Navbar} from "./components"
import {Routes, Route, useLocation} from "react-router-dom"
import io from "socket.io-client"

// The address of backend server
const socket = io("http://localhost:4000")

function App() {
  const {pathname} = useLocation()
  const [auth, setAuth] = useState(false)
  const [user, setUser] = useState({})
  const [timer, setTimer] = useState({
    hour: 7,
    min: 59,
    sec: 59
  })
  const [isChecked, setIsChecked] = useState(false)
  if(!auth) {
    return <Login setAuth={setAuth} setUser={setUser}/>
  }
  socket.emit('sendUsername', user.name)
  return (
    <div className="app">
        {(pathname !== '/' && pathname !== '/wrong_role') && <Navbar />}
        <Routes>
          <Route path='/' element={<Role user={user} setAuth={setAuth}/>} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/wrong_role' element={<WrongRole />} />
          <Route path='/dashboard/attendance' element={<CheckAttendance 
          timer={timer} 
          setTimer={setTimer} 
          user={user}
          setIsChecked={setIsChecked}
          />} />
          <Route path='/dashboard/tasks' element={<Tasks user={user} isChecked={isChecked}/>} />
          <Route path='/dashboard/settings' element={<Settings setAuth={setAuth} user={user}/>} />
          <Route path='/dashboard/chat' element={<Chat user={user} socket={socket}/>} />
        </Routes>
    </div>
  );
}

export default App;
