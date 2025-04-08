
import './App.css'
import NavbarComponent from './Components/Navbar/NavbarComponent'
import Overview from './Components/Overview/Overview'
import SidebarComponent from './Components/Slidebar/SidebarComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'

function App() {

  return (
    <>
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
            </Routes>
          </Col>
        </Row>
      </BrowserRouter>
    </>
  )
}

export default App
