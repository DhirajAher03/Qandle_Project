import React, { useState, useEffect } from 'react';
import { Container, Card, Dropdown, Modal, Button, Form } from 'react-bootstrap';
import './Overview.css';

const RequestSummaryComponent = () => {
  const [requestData, setRequestData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    issue: '',
    timePeriod: '',
    authority: ''
  });

  // Dummy API simulation
  useEffect(() => {
    // Simulate API response
    const fetchedData = [
      { type: 'Provision', progress: 70, raised: 2, pending: 1, approved: 1, rejected: 0 },
      { type: 'Leave', progress: 45, raised: 3, pending: 2, approved: 0, rejected: 1 },
      { type: 'Attendance Regularization', progress: 85, raised: 5, pending: 0, approved: 4, rejected: 1 },
      { type: 'Work from home', progress: 60, raised: 1, pending: 0, approved: 1, rejected: 0 }
    ];
    setRequestData(fetchedData);
  }, []);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    handleClose();
  };

  return (
    <>
      <Container className='p-3'>
        <Card className="bg-white rounded-4 border-0 box-shadow p-4">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="fw-bold mb-3">Request Status Summary</h5>

            <Dropdown>
              <Dropdown.Toggle
                variant="white"
                id="category-dropdown"
                className="rounded-pill border px-3 btn-sm d-flex align-items-center gap-2"
              >
                Last 7 Day(s)
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Last 1 Day(s)</Dropdown.Item>
                <Dropdown.Item>Last 5 Day(s)</Dropdown.Item>
                <Dropdown.Item>Last 15 Day(s)</Dropdown.Item>
                <Dropdown.Item>Last 30 Day(s)</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <div className="row gy-3">
            {requestData.map((item, index) => (
              <div className="col-12 col-sm-6 col-lg-3" key={index}>
                <div className="card h-100 custom-corner-box">
                  <div className="card-body d-flex flex-column justify-content-between">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <h6 className="card-title mb-0">{item.type}</h6>
                      <div className="progress-circle" style={{ '--value': item.progress }}>
                        <div className="inner-circle">
                          <span>{item.progress}%</span>
                        </div>
                      </div>
                    </div>

                    <ul className="list-unstyled text-muted mt-1 mb-1">
                      <div className="row row-cols-2 gx-1 gy-1 small">
                        <div className="col p-0 m-0"><li className="mb-1">{item.raised} Raised</li></div>
                        <div className="col p-0 m-0"><li className="mb-1">{item.pending} Pending</li></div>
                        <div className="col p-0 m-0"><li className="mb-1">{item.approved} Approved</li></div>
                        <div className="col p-0 m-0"><li className="mb-1">{item.rejected} Rejected</li></div>
                      </div>
                    </ul>

                    <button
                      className="btn btn-outline-primary rounded-4 btn-sm mt-auto"
                      onClick={handleShow}
                    >
                      Raise Request
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </Container>

      {/* Modal */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Raise a Request</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Mention Issue</Form.Label>
              <Form.Control
                type="text"
                placeholder="Describe your issue"
                name="issue"
                value={formData.issue}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Time Period</Form.Label>
              <Form.Control
                type="text"
                placeholder="E.g. 10-Apr to 14-Apr"
                name="timePeriod"
                value={formData.timePeriod}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Select Higher Authority</Form.Label>
              <Form.Select
                name="authority"
                value={formData.authority}
                onChange={handleChange}
                required
              >
                <option value="">Choose...</option>
                <option value="Manager">Manager</option>
                <option value="Team Lead">Team Lead</option>
                <option value="HR">HR</option>
              </Form.Select>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit Request
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default RequestSummaryComponent;
