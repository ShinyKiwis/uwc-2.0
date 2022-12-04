import { useState } from 'react';
import './App.css';
import { Login, Role, WrongRole, Dashboard, CheckAttendance } from './pages';
import {Navbar} from "./components"
import {Routes, Route, useLocation} from "react-router-dom"

function App() {
  const {pathname} = useLocation()
  const [auth, setAuth] = useState(false)
  const [user, setUser] = useState({})
  const [timer, setTimer] = useState({
    hour: 7,
    min: 59,
    sec: 59
  })
  if(!auth) {
    return <Login setAuth={setAuth} setUser={setUser}/>
  }
  return (
    <div className="app">
        {(pathname !== '/' && pathname !== '/wrong_role') && <Navbar />}
        <Routes>
          <Route path='/' element={<Role user={user} setAuth={setAuth}/>} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/wrong_role' element={<WrongRole />} />
          <Route path='/dashboard/attendance' element={<CheckAttendance timer={timer} setTimer={setTimer} user={user}/>} />
        </Routes>
    </div>
  );
}

export default App;
