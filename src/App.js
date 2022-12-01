import { useState } from 'react';
import './App.css';
import { Login, Role, WrongRole, Dashboard} from './pages';
import {BrowserRouter,Routes, Route} from "react-router-dom"

function App() {
  const [auth, setAuth] = useState(false)
  const [user, setUser] = useState({})
  if(!auth) {
    return <Login setAuth={setAuth} setUser={setUser}/>
  }
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Role user={user} setAuth={setAuth}/>} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/wrong_role' element={<WrongRole />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
