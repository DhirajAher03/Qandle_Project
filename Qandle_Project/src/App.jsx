
import './App.css'
import LoginComponent from './Components/Login/LoginComponent'
import NavbarComponent from './Components/Navbar/NavbarComponent'
import Overview from './Components/Overview/Overview'
import SidebarComponent from './Components/Slidebar/SidebarComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LeaveComponent from './Components/Leave/LeaveComponent'
import { Col, Row } from 'react-bootstrap'
import Attendance from './Components/Attendance/Attendance'
import { useState } from 'react'

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => setShowSidebar(prev => !prev);
  const closeSidebar = () => setShowSidebar(false);

  return (
    <>
      {/* <LoginComponent/> */}


      <BrowserRouter>
        <Row lg={1} className='custom-row'>
          <NavbarComponent toggleSidebar={toggleSidebar} />
        </Row>
        <Row lg={11} className='custom-row-2'>
          <Col className='col-lg-2 col-0'>
            <SidebarComponent show={showSidebar} closeSidebar={closeSidebar}/>
          </Col>
          <Col className='col-12 col-lg-10 d-flex justify-content-center'>
            <Routes>
              <Route path="/" element={<Overview />}/>
              <Route path="/leave" element={<LeaveComponent />}/>
              <Route path="/attendance" element={<Attendance/>}/>
            </Routes>
          </Col>
        </Row>
      </BrowserRouter>

    </>
  )
}

export default App
