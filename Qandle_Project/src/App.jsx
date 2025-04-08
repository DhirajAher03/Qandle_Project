// import { useState } from 'react'
import './App.css'
import NavbarComponent from './Components/Navbar/NavbarComponent'
import TimeAndAttendenceComponent from './Components/Overview/TimeAndAttendanceComponent'

function App() {

  return (
    <>
      <NavbarComponent />
      <div className="sidebar">
      <TimeAndAttendenceComponent/>
      </div>
    </>
  )
}

export default App
