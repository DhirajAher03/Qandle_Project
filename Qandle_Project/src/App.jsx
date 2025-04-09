
import './App.css'
import LoginComponent from './Components/Login/LoginComponent'
import NavbarComponent from './Components/Navbar/NavbarComponent'
import Overview from './Components/Overview/Overview'
import SidebarComponent from './Components/Slidebar/SidebarComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
import Attendance from './Components/Attendance/Attendance'
import { useState } from 'react'

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  } 
  const closeSidebar = () => {
    setShowSidebar(false);
  }

  return (
    <>
    {/* <LoginComponent/> */}
      <BrowserRouter>
        <Row lg={1} className='custom-row'>
          <NavbarComponent toggleSidebar={toggleSidebar}/>
        </Row>
        <Row lg={11} className='custom-row-2'>
          <Col lg={2}>
            <SidebarComponent show={showSidebar} closeSidebar={closeSidebar}/>
            {showSidebar && <div className="overlay" onClick={closeSidebar}></div>}
          </Col>
          <Col lg={10}>
            <Routes>
              <Route path="/" element={<Overview />}/>
              <Route path="/Attendance" element={<Attendance/>}/>
            </Routes>
          </Col>
        </Row>
      </BrowserRouter>
    </>
  )
}

export default App
