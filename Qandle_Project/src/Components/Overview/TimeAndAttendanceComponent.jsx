import React from 'react';
import './Overview.css';
import { Card, Dropdown, Button, Row, Col , Container } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, } from 'chart.js';

// Register chart elements
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const TimeAndAttendenceComponent = () => {
  const data = {
    labels: ['07 Mon', '08 Tue', '09 Wed', '10 Thu', '11 Fri', '12 Sat', '13 Sun'],
    datasets: [
      {
        label: 'Break Duration',
        backgroundColor: '#fbc02d',
        data: [0, 0, 0, 0, 0, 0, 0],
      },
      {
        label: 'Work Hours',
        backgroundColor: '#4caf50',
        data: [1.81, 0, 0, 0, 0, 0, 0],
      },
      {
        label: 'Auto ClockOut',
        backgroundColor: '#f44336',
        data: [0, 0, 0, 0, 0, 0, 0],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <>
      <Container className='p-3'>
        <h4 className="fw-bold mb-3">Overview</h4>
        <Card className="p-3 box-shadow rounded-4 border-0">
          <h5 className="fw-bold mb-3">Time & Attendance</h5>
          <Row className="custom-row">
            {/* Left Part: Time Data */}
            <Col md={6} className="border-end">
              <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
                <div className="text-center mx-auto mx-md-0">
                  <h1 className="text-primary fw-bold">00:33:36</h1>
                  <p>07-Apr-2025</p>
                </div>

                <div className="d-flex flex-wrap gap-3 justify-content-center p-3">
                  <div className="bg-light rounded p-2 text-center">
                    <p className="mb-1 fw-bold">09:03:07</p>
                    <small className="text-muted">Clock In Time</small>
                  </div>
                  <div className="bg-warning rounded p-2 text-center">
                    <p className="mb-1 fw-bold">00:00:00</p>
                    <small className="text-muted">Break Duration</small>
                  </div>
                </div>

                <div className="d-flex gap-3 justify-content-center">
                  <Button variant="warning">Start Break</Button>
                  <Button variant="danger">Clock Out</Button>
                </div>
              </div>

              {/* Period Dropdown */}
              <div className="mt-4 text-center">
                <div className="Period-border">
                  <span className="fw-semibold">Period:</span>
                  <Dropdown>
                    <Dropdown.Toggle className="fw-semibold" variant="white" size="sm">
                      Last 07 Day's
                    </Dropdown.Toggle>
                  </Dropdown>
                </div>
              </div>

              {/* Time Cards with Arrows */}
              <div className="mt-3">
                <div className="d-flex justify-content-center align-items-center gap-3 flex-wrap">
                  {/* Left Arrow */}
                  <Button variant="white" className="rounded-circle px-2 py-1 d-none d-md-inline-block">
                    &#8592;
                  </Button>

                  {/* Cards */}
                  <div className="bg-light rounded-pill px-4 py-3 text-center shadow-sm">
                    <h5 className="mb-0 fw-bold text-primary">10:16</h5>
                    <small className="fw-semibold">Average Working Hours</small>
                  </div>
                  <div className="bg-light rounded-pill px-4 py-3 text-center shadow-sm">
                    <h5 className="mb-0 fw-bold text-primary">00:00</h5>
                    <small className="fw-semibold">Average Break Duration</small>
                  </div>

                  {/* Right Arrow */}
                  <Button variant="white" className="rounded-circle px-2 py-1 d-none d-md-inline-block">
                    &#8594;
                  </Button>
                </div>
              </div>
            </Col>

            {/* Right Part: Bar Chart */}
            <Col md={6}>
              <div>
                <Bar data={data} options={options} height={150} />
                <div className="d-flex justify-content-between mt-2 text-muted">
                  <span>Pre Week</span>
                  <span>Next Week</span>
                </div>
              </div>
            </Col>
          </Row>
        </Card>
      </Container>
    </>
  );
};

export default TimeAndAttendenceComponent;
