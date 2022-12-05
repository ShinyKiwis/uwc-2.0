import React, { useEffect, useState } from 'react'
import AttendanceStyle from "../styles/attendance.module.css"

const AttendanceCard = ({user, setIsChecked}) => {
  const [status, setStatus] = useState("Uncheck")
  return (
    <div className={AttendanceStyle.attendance_container}>
      <h2>{user.name}</h2>
      <h2>{user.id}</h2>
      <img src="https://www.qrstuff.com/images/default_qrcode.png" 
        alt="qr checkin code"
        onClick={()=>{
          setStatus("Checked in")
          setIsChecked(true)
        }}/>
      <h4>Place under scanner to check in/out</h4>
      <h4>Status: {status}</h4>
    </div>
  ) 
}

const Timer = ({timer, setTimer}) => {
  
  useEffect(()=>{
    const interval = setInterval(() => {
      setTimer({...timer, sec: timer.sec-1})
      if(timer.sec === 0) {
        setTimer({...timer, min: timer.min-1,sec:59})
      }
    }, 1000)
    return () => clearInterval(interval)
  })

  return (
    <div className={AttendanceStyle.timer_box}>
      <div className={AttendanceStyle.timer_container}>
        <span>{timer.hour}</span>:<span>{timer.min}</span>:
        <span>{timer.sec < 10 ? `0${timer.sec}`: timer.sec}</span>
      </div>
    </div>
  )
}

const CheckAttendance = ({timer, setTimer, user, setIsChecked}) => {
  return (
    <div className={AttendanceStyle.container}>
      <AttendanceCard user={user} setIsChecked={setIsChecked}/>
      <Timer timer={timer} setTimer={setTimer}/>
      <h4>Until checking out section active</h4>
      <h4 style={{color: "#ccc"}}>*Complete all your tasks before checking out</h4>
    </div>
  )
}

export default CheckAttendance
