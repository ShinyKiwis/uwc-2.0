import React from 'react'
import DashboardStyle from "../styles/dashboard.module.css"

const Dashboard = () => {
  return (
    <div className={DashboardStyle.container}>
      <h2>Welcome back to the system</h2>
      <h2>Please check in before starting your day</h2>
    </div>
  )
}

export default Dashboard
