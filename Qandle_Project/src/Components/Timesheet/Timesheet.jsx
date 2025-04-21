import React, { useState } from "react";
import { Tab, Tabs, Container, Modal } from "react-bootstrap";
import { IoPlayCircleOutline } from "react-icons/io5";
import EmpTrackerComponent from "./EmpTrackerComponent";
import SummaryComponent from "./SummaryComponent";
import "./Timesheet.css";

const Timesheet = () => {
   const [showModal, setShowModal] = useState(false);
  
    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
  return (
    <>
    <Modal show={showModal} onHide={handleClose} size="lg" centered>
          <Modal.Header closeButton>
            <Modal.Title>How to use Leave section?</Modal.Title>
          </Modal.Header>
          <Modal.Body className="p-0">
            <div className="ratio ratio-16x9">
              <iframe
                src="https://player.vimeo.com/video/325407543"
                title="How to use this section"
                allow="autoplay; fullscreen"
                allowFullScreen
              ></iframe>
            </div>
          </Modal.Body>
        </Modal>
      <Container>
        <div className="d-flex justify-content-between align-items-center pt-3">
          <h3>Timesheet</h3>
          <button
            className="btn btn-link text-decoration-none d-flex align-items-center"
            onClick={handleShow}
          >
            How to use this section?{" "}
            <IoPlayCircleOutline size={20} className="ms-1" />
          </button>
        </div>
        <Tabs
          defaultActiveKey="Employee-Tracker"
          transition={false}
          id="noanim-tab-example"
        >
          <Tab
            eventKey="Employee-Tracker"
            title="Employee-Tracker"
            className="pe-4"
          >
            <EmpTrackerComponent/>
          </Tab>
          <Tab eventKey="Summary" title="Summary">
            <SummaryComponent />
          </Tab>
        </Tabs>
      </Container>
    </>
  );
};

export default Timesheet;
