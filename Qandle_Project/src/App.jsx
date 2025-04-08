
import './App.css'
import NavbarComponent from './Components/Navbar/NavbarComponent'
import SidebarComponent from './Components/Slidebar/SidebarComponent'
import { BrowserRouter, Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
      <NavbarComponent />
      <SidebarComponent/>
      <Routes>
        
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
