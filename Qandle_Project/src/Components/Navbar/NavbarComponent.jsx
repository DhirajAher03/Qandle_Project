import React, { useState } from 'react';
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Dropdown,
  InputGroup,
  Container,
  Modal,
  Button
} from "react-bootstrap";
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
import { FaBars } from "react-icons/fa";

import './Navbar.css';

const NavbarComponent = ({ toggleSidebar }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  // Dummy notifications
  const notifications = [
    { id: 1, message: 'New user registered', time: '2 mins ago' },
    { id: 2, message: 'Meeting at 3 PM today', time: '1 hour ago' },
    { id: 3, message: 'Server backup completed', time: 'Yesterday' },
  ];

  return (
    <>
      <Navbar className="bg-primary shadow-sm p-2 position-fixed w-100 z-3">
        <Container fluid className="d-flex align-items-center justify-content-between px-3">
          {/* Brand */}
          <Button variant="light" className="d-lg-none" onClick={toggleSidebar}>
            <FaBars />
          </Button>

          <Navbar.Brand href="#home" className="fw-semibold fs-4 text-white m-0 d-none d-lg-block">
            Sumago
          </Navbar.Brand>

          {/* Desktop Search Bar */}
          <div className="d-none d-lg-block flex-grow-1 mx-4">
            <Form style={{ maxWidth: '600px' }} className="w-100">
              <InputGroup>
                <InputGroup.Text className="bg-white">
                  <Search />
                </InputGroup.Text>
                <FormControl
                  type="search"
                  placeholder="Search by name, department or location"
                  className="px-3"
                />
              </InputGroup>
            </Form>
          </div>

          {/* Mobile View Buttons */}
          <div className="d-flex align-items-center gap-3 ms-auto d-lg-none">
            <Nav.Link
              onClick={() => setShowSearch(true)}
              className="bg-white rounded-circle d-flex align-items-center justify-content-center"
              style={{ height: '35px', width: '35px' }}
            >
              <Search size={18} className="text-dark" />
            </Nav.Link>

            <Nav.Link
              onClick={() => setShowNotifications(true)}
              className="bg-white rounded-circle d-flex align-items-center justify-content-center"
              style={{ height: '35px', width: '35px' }}
            >
              <HiBellAlert size={18} className="text-dark" />
            </Nav.Link>
          </div>

          {/* Notification for Desktop */}
          <Nav.Link
            onClick={() => setShowNotifications(true)}
            className="bg-white rounded-circle d-none d-lg-flex align-items-center justify-content-center ms-3"
            style={{ height: '40px', width: '40px' }}
          >
            <HiBellAlert size={20} className="text-dark" />
          </Nav.Link>

          {/* Profile Dropdown (same for all views) */}
          <Dropdown align="end" className="ms-2">
            <Dropdown.Toggle
              variant="light"
              id="dropdown-basic"
              className="d-flex align-items-center icon-rounded text-secondary border-0"
            >
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
        </Container>
      </Navbar>

      {/* Floating Search Modal for Mobile */}
      <Modal
        show={showSearch}
        onHide={() => setShowSearch(false)}
        centered
        size="lg"
        className="search-modal"
      >
        <Modal.Body className="p-3">
          <Form className="w-100">
            <InputGroup>
              <InputGroup.Text className="bg-white">
                <Search />
              </InputGroup.Text>
              <FormControl
                type="search"
                placeholder="Search by name, department or location"
                className="px-3"
                autoFocus
              />
              <Button variant="secondary" onClick={() => setShowSearch(false)}>
                Close
              </Button>
            </InputGroup>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Notification Modal */}
      <Modal
        show={showNotifications}
        onHide={() => setShowNotifications(false)}
        centered
        size="md"
      >
        <Modal.Header closeButton>
          <Modal.Title>Notifications</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {notifications.length === 0 ? (
            <p>No notifications available.</p>
          ) : (
            <ul className="list-unstyled m-0">
              {notifications.map((note) => (
                <li key={note.id} className="mb-3 border-bottom pb-2">
                  <div className="fw-semibold">{note.message}</div>
                  <small className="text-muted">{note.time}</small>
                </li>
              ))}
            </ul>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NavbarComponent;
