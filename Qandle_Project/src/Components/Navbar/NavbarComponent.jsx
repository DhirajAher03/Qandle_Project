import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Dropdown,
  InputGroup,
  Container,
} from 'react-bootstrap';
import {
  Gear,
  PersonCircle,
  QuestionCircle,
  BoxArrowRight,
  Search,

} from 'react-bootstrap-icons';
import { HiBellAlert } from "react-icons/hi2";
import { LuShipWheel } from "react-icons/lu";
import { BiLike } from "react-icons/bi";
import { TiPrinter } from "react-icons/ti";
import { GrDocumentText } from "react-icons/gr";


import './Navbar.css';

const NavbarComponent = () => {
  return (
    <>
    <Navbar expand="lg" className="bg-primary shadow-sm p-0 position-fixed w-100">
      <Container fluid className="px-4">
        {/* Brand and Toggle */}
        <Navbar.Brand href="#home" className="fw-semibold logo-text fs-2 text-white">Qandle</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" className="bg-white rounded" />

        {/* Collapse content */}
        <Navbar.Collapse id="navbar-nav">
          {/*Search Bar */}
          <div className="d-flex justify-content-center w-100 my-3 my-lg-0">
            <Form style={{ maxWidth: '600px' }} className="w-100">
              <InputGroup className="w-100">
                {/* Dropdown */}
                <Dropdown>
                  <Dropdown.Toggle
                    variant="light"
                    id="category-dropdown"
                    className="rounded-start-pill border-end-0 px-4 d-flex align-items-center gap-2"
                  >
                    People
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>People</Dropdown.Item>
                    <Dropdown.Item>Name</Dropdown.Item>
                    <Dropdown.Item>Department</Dropdown.Item>
                    <Dropdown.Item>Location</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                {/* Search Icon */}
                <InputGroup.Text className="bg-white border-start-0 border-end-0">
                  <Search />
                </InputGroup.Text>

                {/* Input Field */}
                <FormControl
                  type="search"
                  placeholder="Search by name, department or location"
                  className="border-start-0 border-end-0 px-3 rounded-end-pill"
                  aria-label="Search"
                />

              </InputGroup>
            </Form>
          </div>

          {/* Right Icons */}
          <Nav className="align-items-center gap-3 justify-content-center mt-3 mt-lg-0 ms-lg-auto">
            <Nav.Link
              href="#notifications"
              className="bg-white rounded-circle d-flex align-items-center justify-content-center"
              style={{ height: '40px', width: '40px' }}
            >
              <HiBellAlert size={20} className="text-dark" />
            </Nav.Link>

            <Dropdown align="end">
              <Dropdown.Toggle variant="light" id="dropdown-basic" className="d-flex align-items-center icon-rounded text-secondary border-0">
                <PersonCircle size={35} className="me-1" />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#setup">
                  <LuShipWheel size={18} className="me-2 text-info" />
                  Set Up Settings
                </Dropdown.Item>
                <Dropdown.Item href="#account">
                  <Gear size={16} className="me-2" />
                  Account Settings
                </Dropdown.Item>
                <Dropdown.Item href="#favourites">
                  <BiLike size={18} className="me-2 text-warning" />
                  Add to Favourites
                </Dropdown.Item>
                <Dropdown.Item href="#report">
                  <TiPrinter size={18} className="me-2 text-success" />
                  Report a Problem
                </Dropdown.Item>
                <Dropdown.Item href="#report">
                  <QuestionCircle size={16} className="me-2 text-danger" />
                  Product Tour
                </Dropdown.Item>
                <Dropdown.Item href="#report">
                  <GrDocumentText size={18} className="me-2 text-primary" />
                  Help Text Visible
                </Dropdown.Item>
                <Dropdown.Item href="#report">
                  <QuestionCircle size={16} className="me-2 text-warning" />
                  CS Session
                </Dropdown.Item>
                <Dropdown.Item href="#logout">
                  <BoxArrowRight size={16} className="me-2 text-danger" />
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </>
  );
};

export default NavbarComponent;
