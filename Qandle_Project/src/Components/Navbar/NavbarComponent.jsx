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
import { FaBars } from "react-icons/fa";

import './Navbar.css';

const NavbarComponent = ({ toggleSidebar }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const notifications = [
    { id: 1, text: "New message from John" },
    { id: 2, text: "Meeting reminder at 2 PM" },
    { id: 3, text: "Task completed successfully" },
    // Add more notifications as needed
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

          {/* Notification Icon */}
          <Nav.Link
            onClick={() => setShowNotifications(true)}
            className="bg-white rounded-circle d-none d-lg-flex align-items-center justify-content-center ms-3"
            style={{ height: '40px', width: '40px' }}
          >
            <HiBellAlert size={20} className="text-dark" />
          </Nav.Link>

          {/* Profile Dropdown */}
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
                Set Up Settings
              </Dropdown.Item>
              <Dropdown.Item href="#account">
                Account Settings
              </Dropdown.Item>
              <Dropdown.Item href="#favourites">
                Add to Favourites
              </Dropdown.Item>
              <Dropdown.Item href="#logout">
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Navbar>

      {/* Notification Modal */}
      <Modal
        show={showNotifications}
        onHide={() => setShowNotifications(false)}
        centered
        size="lg"
        className="notification-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Notifications</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {notifications.length > 0 ? (
            notifications.map((notification) => (
              <div key={notification.id} className="notification-item mb-3">
                <p>{notification.text}</p>
              </div>
            ))
          ) : (
            <p>No new notifications</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowNotifications(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

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
    </>
  );
};

export default NavbarComponent;
