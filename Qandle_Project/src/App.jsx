
import './App.css'
import LoginComponent from './Components/Login/LoginComponent'
import NavbarComponent from './Components/Navbar/NavbarComponent'
import Overview from './Components/Overview/Overview'
import SidebarComponent from './Components/Slidebar/SidebarComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LeaveComponent from './Components/Leave/LeaveComponent'

import { Col, Row } from 'react-bootstrap'

function App() {

  return (
    <>
      {/* <LoginComponent/> */}

      {/* <LoginComponent /> */}

      <BrowserRouter>
        <Row lg={1} className="custom-row">
          <NavbarComponent />
        </Row>
        <Row lg={11} className="custom-row-2">
          <Col lg={3}>
            <SidebarComponent />
          </Col>
          <Col lg={9}>
            <Routes>
              <Route path="/" element={<Overview />} />
              <Route path="/leave" element={<LeaveComponent />} className="elements" />
            </Routes>
          </Col>
        </Row>
      </BrowserRouter>

    </>
  )
}

export default App
