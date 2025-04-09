
import './App.css'
import LeaveComponent from './Components/Leave/LeaveComponent'
import LoginComponent from './Components/Login/LoginComponent'
import NavbarComponent from './Components/Navbar/NavbarComponent'
import Overview from './Components/Overview/Overview'
import SidebarComponent from './Components/Slidebar/SidebarComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'

function App() {

  return (
    <>
    
    {/* <LoginComponent /> */}
    
      <BrowserRouter>
        <Row lg={1}>
          <NavbarComponent />
        </Row>
        <Row lg={11} className='custom-row'>
          <Col lg={3}>
            <SidebarComponent />
          </Col>
          <Col lg={9}>
            <Routes>
              <Route path="/" element={<Overview />} className="elements" />
              <Route path="/leave" element={<LeaveComponent />} className="elements" />
            </Routes>
          </Col>
        </Row>
      </BrowserRouter>
      
    </>
  )
}

export default App
