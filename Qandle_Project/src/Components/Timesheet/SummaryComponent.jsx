
import React from 'react';
import {
  Container, Row, Col, Form, Button, Table, Card, Image
} from 'react-bootstrap';
import { Download, Upload, Calendar } from 'react-bootstrap-icons';
import ProfileIcon from '../../assets/Profile_pic.webp'

const SummaryComponent = () => {
  return (
    <>
      <Container className="py-4">
        {/* Header Section */}
        <Row className="mb-4 Summary-header">
          <Col md={4}>
            <Form.Group controlId="dateRange">
              <Form.Label>Select Date Range</Form.Label>
              <div className="d-flex align-items-center border rounded p-2">
                <Calendar className="me-2" />
                <span>Mar 23, 2025 - Apr 7, 2025</span>
              </div>
            </Form.Group>
          </Col>
          <Col md={2} className='ms-auto'>
            <Form.Group controlId="clientSelect">
              <Form.Label>Select Client</Form.Label>
              <Form.Select>
                <option>test</option>
                <option>modearch_steel</option>
                <option>vad</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={2}>
            <Form.Group controlId="jobSelect">
              <Form.Label>Select Job</Form.Label>
              <Form.Select>
                <option>Test 1</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        {/* Job Summary Card */}
        <Card className="mb-4">
          <Card.Body>
            <Row className="align-items-center">
              <Col md={4} className="d-flex align-items-center">
                <Image
                  src={ProfileIcon}
                  roundedCircle
                  className="me-3 profile-icon"
                />
                <div>
                  <div className="fw-bold">Satish Krishna Aurange</div>
                  <div className="text-muted">Job Approver</div>
                </div>
              </Col>
              <Col md={8}>
                <Row>
                  <Col><strong>Start Date:</strong><br />01/01/2025</Col>
                  <Col><strong>End Date:</strong><br />31/03/2025</Col>
                  <Col><strong>Hours Spent:</strong><br />11h 00m</Col>
                  <Col><strong>Budgeted Hours:</strong><br />8h 00m</Col>
                </Row>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        {/* Timesheet Table */}
        <Table bordered hover responsive className="mb-4">
          <thead className="table-light">
            <tr>
              <th>Date</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Total Time</th>
              <th>Expense</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>27/01/2025</td>
              <td>10:00</td>
              <td>21:00</td>
              <td>11h 00m</td>
              <td>₹4400</td>
              <td className="text-success">✓</td>
              <td>⋮</td>
            </tr>
          </tbody>
        </Table>

        {/* Buttons */}
        <div className="d-flex justify-content-end gap-3">
          <Button variant="primary">
            <Upload className="me-2" size={16} /> Submit Timesheet
          </Button>
          <Button variant="success">
            <Download size={18} />
          </Button>
        </div>
      </Container>
    </>
  )
}

export default SummaryComponent
