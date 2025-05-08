
import './App.css'
import LoginComponent from './Components/Login/LoginComponent'
import NavbarComponent from './Components/Navbar/NavbarComponent'
import Overview from './Components/Overview/Overview'
import SidebarComponent from './Components/Slidebar/SidebarComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LeaveComponent from './Components/Leave/LeaveComponent'
import { Col, Row } from 'react-bootstrap'
import Attendance from './Components/Attendance/Attendance'
<<<<<<< HEAD
import { useState, useEffect } from 'react'
import LoaderComponent from './Loader/LoaderComponent'
=======
>>>>>>> c8e6383217a07f07a2025f6f39ae0d6340a59358
import Timesheet from './Components/Timesheet/Timesheet'
import { useState } from 'react'

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [loading, setLoading] = useState(true);

  const toggleSidebar = () => setShowSidebar(prev => !prev);
  const closeSidebar = () => setShowSidebar(false);

  // Loader
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return <LoaderComponent />;
  }

  return (
    <>
      {/* <LoginComponent/> */}

      {loading ? <LoaderComponent /> : null}
      <BrowserRouter>
        <Row lg={1} className='custom-row'>
          <NavbarComponent toggleSidebar={toggleSidebar} />
        </Row>
        <Row lg={11} className='custom-row-2'>
          <Col className='col-lg-2 col-0'>
            <SidebarComponent show={showSidebar} closeSidebar={closeSidebar} />
          </Col>
          <Col className='col-12 col-lg-10 d-flex justify-content-center'>
            <Routes>
<<<<<<< HEAD
              <Route path="/" element={<Overview />} />
              <Route path="/leave" element={<LeaveComponent />} />
              <Route path="/attendance" element={<Attendance />} />
              <Route path="/timesheet" element={<Timesheet />} />
=======
              <Route path="/" element={<Overview />}/>
              <Route path="/leave" element={<LeaveComponent />}/>
              <Route path="/attendance" element={<Attendance/>}/>
              <Route path='/timesheet' element={<Timesheet />}/>
>>>>>>> c8e6383217a07f07a2025f6f39ae0d6340a59358
            </Routes>
          </Col>
        </Row>
      </BrowserRouter>

    </>
  )
}

export default App
