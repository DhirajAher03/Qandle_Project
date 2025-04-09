import React from 'react';
import { Modal, Button, Accordion } from 'react-bootstrap';
import './FaqCompo.css'
const FaqComponent = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered size="md">
      <Modal.Header closeButton className="bg-primary text-white">
        <Modal.Title>FAQs</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ maxHeight: '60vh', overflowY: 'auto' }}>
        <Accordion defaultActiveKey="">
          <Accordion.Item eventKey="0">
            <Accordion.Header>How can I apply for a half day(s) Leave?</Accordion.Header>
            <Accordion.Body>
              You can select "Half Day" while applying for the leave in the leave application section.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>Why is my Leave without Pay (LWP) balance unlimited?</Accordion.Header>
            <Accordion.Body>
              LWP is not accrued, so it’s unlimited and depends on your company’s approval.
              LWP is not accrued, so it’s unlimited and depends on your company’s approval.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Why is this formula not working: Accrued  Requested  Used = Leave Balance?</Accordion.Header>
            <Accordion.Body>
              This might be due to incorrect or missing data. Please verify all values and try again.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>What is a restricted/Optional holiday?</Accordion.Header>
            <Accordion.Body>
              These are holidays you can choose based on your preference, unlike fixed public holidays.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header>How can I apply for a restricted/optional holiday?</Accordion.Header>
            <Accordion.Body>
              Select the holiday from the list of optional holidays and submit a leave request.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          OK
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FaqComponent;
