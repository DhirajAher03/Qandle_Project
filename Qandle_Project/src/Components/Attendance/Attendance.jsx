import React from "react";
import { Tab, Tabs, Modal } from "react-bootstrap";
import StatusTab from "./StatusTab";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { IoPlayCircleOutline } from "react-icons/io5";
import "./Attendance.css";
import RequestComponent from "./RequestComponent";
import ShiftDetailsComponent from "./ShiftDetailsComponent";
import PolicyDetailsComponent from "./PolicyDetailsComponent";

const Attendance = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  return (
    <>
      <Container className="bg-light rounded-3 m-3 p-2 shadow">
        {/* Modal for Video How to use Leave section? */}
        <div className="d-flex justify-content-between align-items-center pt-3">

        <h3>Attendance</h3>
        <button
          className="btn btn-link text-decoration-none d-flex align-items-center"
          onClick={handleShow}
        >
          How to use this section?{" "}
          <IoPlayCircleOutline size={20} className="ms-1" />
        </button>
        </div>
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
        <Tabs
          defaultActiveKey="Status"
          transition={false}
          id="noanim-tab-example"
        >
          <Tab eventKey="Status" title="Status" className="">
            <StatusTab />
          </Tab>
          <Tab eventKey="Regularize-Requests" title="Regularize-Requests">
            <RequestComponent/>
          </Tab>
          <Tab eventKey="Shift-Details" title="Shift-Details">
            <ShiftDetailsComponent/>
          </Tab>
          <Tab eventKey="Policy-Details" title="Policy-Details">
            <PolicyDetailsComponent/>
          </Tab>
        </Tabs>
      </Container>
    </>
  );
};

export default Attendance;
