import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  CartesianGrid
} from 'recharts';
const data = [
  { date: '01 Tue' },
  { date: '02 Wed' },
  { date: '03 Thu' },
  { date: '04 Fri' },
  { date: '05 Sat' },
  { date: '06 Sun' },
  { date: '07 Mon' },
  { date: '08 Tue', BREAK_DURATION: 0, WORK_HOURS: 1.3, AUTO_CLOCKOUT: 0 },
  { date: '09 Wed' },
  { date: '10 Thu' },
  { date: '11 Fri' },
  { date: '12 Sat' },
  { date: '13 Sun' },
  { date: '14 Mon' },
  { date: '15 Tue' },
  { date: '16 Wed' },
  { date: '17 Thu' },
  { date: '18 Fri' },
  { date: '19 Sat' },
  { date: '20 Sun' },
  { date: '21 Mon' },
  { date: '22 Tue' },
  { date: '23 Wed' },
  { date: '24 Thu' },
  { date: '25 Fri' },
  { date: '26 Sat' },
  { date: '27 Sun' },
  { date: '28 Mon' },
  { date: '29 Tue' },
  { date: '30 Wed' }
];


import { ButtonGroup } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Button, Col, Row, Form, Table, Container } from "react-bootstrap";
import {
  IoLogInOutline,
  IoLogOutOutline,
  IoCafeOutline,
} from "react-icons/io5";
import { FaRegCalendarAlt, FaDollarSign } from "react-icons/fa";
import CountUp from "react-countup";
import axios from "axios";
import { CiBoxList } from "react-icons/ci";
import { IoBarChartSharp } from "react-icons/io5";
// import WorkChart from "./WorkChart";

const StatusTab = () => {
  // State for toggle button
  const [viewType, setViewType] = useState("table"); // 'graph' or 'table'`

  // State for attendance data
  const [attendanceData, setAttendanceData] = useState([]);

  // State for summary stats
  const [summary, setSummary] = useState({
    avgWorkingHrs: "00:00",
    avgInTime: "00:00",
    avgOutTime: "00:00",
    avgBreak: "00",
    paidDays: 0,
  });

  // Fetch data from API on mount
  // useEffect(() => {
  // Replace with your API endpoint
  //   axios.get("/api/attendance")
  //     .then(response => {
  //       setAttendanceData(response.data.attendance);
  //       setSummary(response.data.summary);
  //     })
  //     .catch(error => console.error("Error fetching data:", error));
  // }, []);

  useEffect(() => {
    // Simulated API response
    const fakeResponse = {
      attendance: [
        {
          date: "07-Apr-2025",
          in: "09:03:07",
          out: "-",
          hours: "00:45:56",
          remark: "Present",
        },
        {
          date: "06-Apr-2025",
          in: "-",
          out: "-",
          hours: "00:00:00",
          remark: "Week Off",
        },
        {
          date: "05-Apr-2025",
          in: "-",
          out: "-",
          hours: "00:00:00",
          remark: "Week Off",
        },
        {
          date: "04-Apr-2025",
          in: "08:58:52",
          out: "19:38:07",
          hours: "10:39:15",
          remark: "Present",
        },
        {
          date: "03-Apr-2025",
          in: "09:06:44",
          out: "19:06:47",
          hours: "10:00:03",
          remark: "Present",
        },
        {
          date: "02-Apr-2025",
          in: "08:59:29",
          out: "19:13:30",
          hours: "10:14:01",
          remark: "Present",
        },
      ],
      summary: {
        avgWorkingHrs: "08:23",
        avgInTime: "09:02",
        avgOutTime: "19:19",
        avgBreak: "0",
        paidDays: 7,
      },
    };
  
    const chartData = attendanceData.map((item) => {
      const [h, m, s] = item.hours.split(":").map(Number);
      const workHours = h + m / 60 + s / 3600;
      return {
        date: item.date.split("-")[0], // Get day (e.g., "02", "03")
        WORK_HOURS: parseFloat(workHours.toFixed(2)),
        BREAK_DURATION: parseFloat(summary.avgBreak),
        AUTO_CLOCKOUT: item.out === "-" ? 1 : 0,
      };
    });

    // Simulate network delay
    setTimeout(() => {
      setAttendanceData(fakeResponse.attendance);
      setSummary(fakeResponse.summary);
    }, 1000);
  }, []);

  // Helper to convert HH:MM to float for animation
  const timeToFloat = (time) => {
    const [h, m] = time.split(":").map(Number);
    return h + m / 60;
  };

  return (
    <Container>
      <div className="d-flex justify-content-between align-items-center pt-4 pb-4 pe-4">
        <h3>Attendance</h3>
        <a href="#">How to use this section?</a>
      </div>
      {/* Month Header */}
      <Row className="align-items-center record-by-month mb-3">
        <Col lg={11}>
          <h5>&larr; Apr 2025 &rarr;</h5>
        </Col>
        <Col lg={1}>
          <ButtonGroup>
            <Button
              variant={viewType === "table" ? "primary" : "outline-secondary"}
              onClick={() => setViewType("table")}
            >
              <CiBoxList />
            </Button>
            <Button
              variant={viewType === "graph" ? "primary" : "outline-secondary"}
              onClick={() => setViewType("graph")}
            >
              <IoBarChartSharp className="fs-4" />
            </Button>
          </ButtonGroup>
        </Col>
      </Row>

      {/* Summary Cards */}
      <Row className="mb-4 text-center">
        <Col>
          <div className="p-3 avg-Work_Hrs rounded">
            <FaRegCalendarAlt className="fs-3 text-success" />
            <h5>
              <CountUp
                end={timeToFloat(summary.avgWorkingHrs)}
                decimals={2}
                duration={1.5}
              />
            </h5>
            <small>Average Working Hours</small>
          </div>
        </Col>
        <Col>
          <div className="p-3 avg-In-Time rounded">
            <IoLogInOutline className="fs-3" />
            <h5>
              <CountUp
                end={timeToFloat(summary.avgInTime)}
                decimals={2}
                duration={1.5}
              />
            </h5>
            <small>Average In Time</small>
          </div>
        </Col>
        <Col>
          <div className="p-3 avg-out-time rounded">
            <IoLogOutOutline className="fs-3 text-primary" />
            <h5>
              <CountUp
                end={timeToFloat(summary.avgOutTime)}
                decimals={2}
                duration={1.5}
              />
            </h5>
            <small>Average Out Time</small>
          </div>
        </Col>
        <Col>
          <div className="p-3 avg-break rounded">
            <IoCafeOutline className="fs-3" />
            <h5>
              <CountUp
                end={parseFloat(summary.avgBreak)}
                decimals={0}
                duration={1.5}
              />
            </h5>
            <small>Average Break</small>
          </div>
        </Col>
        <Col>
          <div className="p-3 paid-days rounded">
            <FaDollarSign className="fs-3 text-danger" />
            <h5>
              <CountUp end={summary.paidDays} duration={1.5} />
            </h5>
            <small>Paid Days</small>
          </div>
        </Col>
      </Row>

      {/* Filter and Export Row */}
      <Form className="mb-3 d-flex align-items-center">
        <label htmlFor="group1" className="me-2">
          <strong>Select Dates:</strong>
        </label>
        <Form.Check
          inline
          label="Check/Un-Check All"
          name="group1"
          type="radio"
          defaultChecked
        />
        <Form.Check
          inline
          label="Excluding Week Off"
          name="group1"
          type="radio"
        />
        <div className="ms-auto">
          <Button variant="primary">Export to CSV</Button>
        </div>
      </Form>

      {viewType === "table" ? (
        // Attendance Table
        <Table bordered hover responsive>
          <thead>
            <tr>
              <th>
                <Form.Check />
              </th>
              <th>Date</th>
              <th>Clock In</th>
              <th>Clock Out</th>
              <th>Total Work Hours</th>
              <th>Remark</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {attendanceData.map((d, idx) => (
              <tr key={idx}>
                <td>
                  <Form.Check />
                </td>
                <td>{d.date}</td>
                <td>{d.in}</td>
                <td>{d.out}</td>
                <td>{d.hours}</td>
                <td
                  className={
                    d.remark === "Week Off" ? "text-danger" : "text-success"
                  }
                >
                  {d.remark}
                </td>
                <td>
                  <Button size="sm" variant="success">
                    Regularize
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <div style={{ width: '100%', height: 300, background: '#fff', padding: '1rem' }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 20, bottom: 50, left: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="date"
            angle={-45}
            textAnchor="end"
            interval={0}
            height={60}
            tick={{ fontSize: 11 }}
          />
          <YAxis domain={[0, 1.5]} tick={{ fontSize: 12 }} />
          <Tooltip />
          <Legend verticalAlign="top" align="right" wrapperStyle={{ fontSize: 12 }} />
          <Bar dataKey="BREAK_DURATION" fill="#00b0f0" name="BREAK_DURATION" barSize={6} />
          <Bar dataKey="WORK_HOURS" fill="#4b0082" name="WORK_HOURS" barSize={6} />
          <Bar dataKey="AUTO_CLOCKOUT" fill="#00c851" name="AUTO_CLOCKOUT" barSize={6} />
        </BarChart>
      </ResponsiveContainer>
    </div>

      )}
    </Container>
  );
};

export default StatusTab;
