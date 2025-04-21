import React, { useEffect, useState } from 'react';
import './Overview.css';
import { Card, Dropdown, Button, Row, Col, Container, Modal } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Slider from 'react-slick';

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

const LeftArrow = ({ onClick }) => (
  <div className="custom-arrow left-arrow" onClick={onClick}>
    <FaChevronLeft />
  </div>
);

const RightArrow = ({ onClick }) => (
  <div className="custom-arrow right-arrow" onClick={onClick}>
    <FaChevronRight />
  </div>
);

const TimeAndAttendenceComponent = () => {
  const [currentTime, setCurrentTime] = useState('00:00:00');
  const [breakTime, setBreakTime] = useState(0);
  const [workingTime, setWorkingTime] = useState(0);
  const [isBreak, setIsBreak] = useState(false);
  const [isClockedIn, setIsClockedIn] = useState(false);
  const [currentWeekIndex, setCurrentWeekIndex] = useState(0);

  const [showBreakModal, setShowBreakModal] = useState(false);
  const [showClockOutModal, setShowClockOutModal] = useState(false);

  const allWeekData = [
    {
      labels: ['07 Mon', '08 Tue', '09 Wed', '10 Thu', '11 Fri', '12 Sat', '13 Sun'],
      workData: [5.81, 6.12, 3.3, 7.12, 4, 0, 0],
      breakData: [0.1, 0.2, 0, 0, 0, 0, 0],
      autoClockOut: [0, 0, 0, 0, 0, 0, 0],
    },
    {
      labels: ['14 Mon', '15 Tue', '16 Wed', '17 Thu', '18 Fri', '19 Sat', '20 Sun'],
      workData: [4, 5, 6, 3.5, 5.5, 0, 0],
      breakData: [0.2, 0.3, 0.1, 0.2, 0.3, 0, 0],
      autoClockOut: [0, 0, 0, 0, 0, 0, 0],
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
      if (isClockedIn && !isBreak) setWorkingTime((prev) => prev + 1);
      if (isClockedIn && isBreak) setBreakTime((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isBreak, isClockedIn]);


  const formatTime = (seconds) => {
    const h = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const s = String(seconds % 60).padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  const currentWeekData = allWeekData[currentWeekIndex];

  const data = {
    labels: currentWeekData.labels,
    datasets: [
      {
        label: 'Break Duration',
        backgroundColor: '#fbc02d',
        data: currentWeekData.breakData,
        barThickness: 20,
      },
      {
        label: 'Work Hours',
        backgroundColor: '#4caf50',
        data: currentWeekData.workData,
        barThickness: 20,
      },
      {
        label: 'Auto ClockOut',
        backgroundColor: '#f44336',
        data: currentWeekData.autoClockOut,
        barThickness: 20,
      },
    ],
  };

  const options = {
    responsive: true,
    animation: { duration: 0 },
    plugins: {
      legend: {
        position: 'bottom',
        labels: { boxWidth: 12, font: { size: 12 } },
      },
      tooltip: { mode: 'index', intersect: false },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 12,
        ticks: { stepSize: 2 },
        grid: { drawBorder: false, color: '#f0f0f0' },
      },
      x: {
        stacked: true,
        grid: { display: false },
        ticks: { font: { size: 12 } },
        categoryPercentage: 0.5,
        barPercentage: 0.8,
      },
    },
  };

  const cardData = [
    { label: 'Average Working Hours', value: formatTime(workingTime) },
    { label: 'Average Break Duration', value: formatTime(breakTime) },
    { label: 'Productivity Boost', value: '06:30:00' },
    { label: 'Extra Time', value: '00:15:00' },
  ];

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 2 } },
      { breakpoint: 992, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Container className="p-3">
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
                <Button
                  variant="warning"
                  onClick={() => setShowBreakModal(true)}
                  style={{ width: '140px', padding: '8px 12px', fontSize: '14px' }}
                >
                  {isBreak ? 'End Break' : 'Start Break'}
                </Button>
                <Button
                  variant={isClockedIn ? 'danger' : 'primary'}
                  onClick={() => {
                    if (isClockedIn) {
                      setShowClockOutModal(true); // show modal to confirm clock out
                    } else {
                      setIsClockedIn(true); // directly clock in
                      setWorkingTime(0);
                      setBreakTime(0);
                    }
                  }}
                  style={{ width: '140px', padding: '8px 12px', fontSize: '14px' }}
                >
                  {isClockedIn ? 'Clock Out' : 'Clock In'}
                </Button>

              </div>

              <div className="mt-4 text-center">
                <div className="Period-border">
                  <span className="fw-semibold">Period:</span>
                  <Dropdown>
                    <Dropdown.Toggle className="fw-semibold" variant="white" size="sm">
                      Last 07 Day's
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Last 7 Days</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Last 30 Days</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Last 90 Days</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>

              <div className="mt-3 w-100 position-relative px-2 px-sm-3 px-md-4">
                <Slider {...sliderSettings}>
                  {cardData.map((item, index) => (
                    <div key={index} className="px-1 px-sm-2">
                      <div className="bg-light rounded-pill px-3 px-sm-4 py-3 text-center shadow-sm">
                        <h5 className="mb-0 fw-bold text-primary">{item.value}</h5>
                        <small className="fw-semibold">{item.label}</small>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </Col>

          <Col md={6} className="d-flex flex-column align-items-center">
            <div style={{ width: '100%', maxWidth: '100%' }}>
              <Bar data={data} options={options} height={200} />
            </div>
            <div className="d-flex justify-content-between w-100 mt-2 text-muted px-3">
              <span style={{ cursor: 'pointer' }} onClick={() => setCurrentWeekIndex((prev) => Math.max(prev - 1, 0))}>← Prev Week</span>
              <span style={{ cursor: 'pointer' }} onClick={() => setCurrentWeekIndex((prev) => Math.min(prev + 1, allWeekData.length - 1))}>Next Week →</span>
            </div>
          </Col>
        </Row>
      </Card>

      {/* Break Confirmation Modal */}
      <Modal show={showBreakModal} onHide={() => setShowBreakModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{isBreak ? 'End Break' : 'Start Break'} Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to {isBreak ? 'end' : 'start'} your break?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowBreakModal(false)}>Cancel</Button>
          <Button variant="warning" onClick={() => {
            setIsBreak((prev) => !prev);
            setShowBreakModal(false);
          }}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Clock Out Confirmation Modal */}
      <Modal show={showClockOutModal} onHide={() => setShowClockOutModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Clock Out Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to clock out?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowClockOutModal(false)}>Cancel</Button>
          <Button variant="danger" onClick={() => {
            setIsClockedIn(false); // reset to clocked out
            setShowClockOutModal(false);
          }}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default TimeAndAttendenceComponent;
