import React, { useEffect, useState } from 'react';
import './Overview.css';
import { Card, Dropdown, Button, Row, Col, Container } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const TimeAndAttendenceComponent = () => {
  const [currentTime, setCurrentTime] = useState('00:00:00');
  const [breakTime, setBreakTime] = useState(0);
  const [workingTime, setWorkingTime] = useState(0);
  const [isBreak, setIsBreak] = useState(false);
  const [isClockedOut, setIsClockedOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
      if (!isClockedOut && !isBreak) setWorkingTime((prev) => prev + 1);
      if (!isClockedOut && isBreak) setBreakTime((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isBreak, isClockedOut]);

  const formatTime = (seconds) => {
    const h = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const s = String(seconds % 60).padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  const data = {
    labels: ['07 Mon', '08 Tue', '09 Wed', '10 Thu', '11 Fri', '12 Sat', '13 Sun'],
    datasets: [
      {
        label: 'Break Duration',
        backgroundColor: '#fbc02d',
        data: [0, 0, 0, 0, 0, 0, 0],
        barThickness: 20,
      },
      {
        label: 'Work Hours',
        backgroundColor: '#4caf50',
        data: [1.81, 0, 0, 0, 0, 0, 0],
        barThickness: 20,
      },
      {
        label: 'Auto ClockOut',
        backgroundColor: '#f44336',
        data: [0, 0, 0, 0, 0, 0, 0],
        barThickness: 20,
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
      x: {
        stacked: true,
        categoryPercentage: 0.6,
        barPercentage: 0.8,
      },
    },
  };

  return (
    <Container className='p-3'>
      <h4 className="fw-bold mb-3 text-center text-md-start">Overview</h4>
      <Card className="p-3 box-shadow rounded-4 border-0">
        <h5 className="fw-bold mb-3 text-center text-md-start">Time & Attendance</h5>
        <Row className="custom-row">
          <Col md={6} className="border-end mb-4 mb-md-0">
            <div className="d-flex flex-column align-items-center gap-3">
              <div className="text-center">
                <h1 className="text-primary fw-bold time-display">{formatTime(workingTime)}</h1>
                <p>{new Date().toLocaleDateString('en-GB')}</p>
              </div>

              <div className="d-flex flex-wrap gap-3 justify-content-center">
                <div className="bg-light rounded p-2 text-center">
                  <p className="mb-1 fw-bold">09:03:07</p>
                  <small className="text-muted">Clock In Time</small>
                </div>
                <div className="bg-warning rounded p-2 text-center">
                  <p className="mb-1 fw-bold">{formatTime(breakTime)}</p>
                  <small className="text-muted">Break Duration</small>
                </div>
              </div>

              <div className="d-flex gap-3 justify-content-center">
                <Button variant="warning" onClick={() => setIsBreak((prev) => !prev)}>
                  {isBreak ? 'End Break' : 'Start Break'}
                </Button>
                <Button variant="danger" onClick={() => setIsClockedOut(true)}>
                  Clock Out
                </Button>
              </div>

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

              <div className="mt-3">
                <div className="d-flex justify-content-center align-items-center gap-3 flex-wrap">
                  <Button variant="white" className="rounded-circle px-2 py-1 d-none d-md-inline-block">
                    &#8592;
                  </Button>

                  <div className="bg-light rounded-pill px-4 py-3 text-center shadow-sm">
                    <h5 className="mb-0 fw-bold text-primary">10:16</h5>
                    <small className="fw-semibold">Average Working Hours</small>
                  </div>
                  <div className="bg-light rounded-pill px-4 py-3 text-center shadow-sm">
                    <h5 className="mb-0 fw-bold text-primary">00:00</h5>
                    <small className="fw-semibold">Average Break Duration</small>
                  </div>

                  <Button variant="white" className="rounded-circle px-2 py-1 d-none d-md-inline-block">
                    &#8594;
                  </Button>
                </div>
              </div>
            </div>
          </Col>

          <Col md={6} className="d-flex flex-column align-items-center">
            <Bar data={data} options={options} height={280} />
            <div className="d-flex justify-content-between w-100 mt-2 text-muted px-3">
              <span>Pre Week</span>
              <span>Next Week</span>
            </div>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default TimeAndAttendenceComponent;