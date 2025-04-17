import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  CartesianGrid,
} from "recharts";
import React, { useEffect, useState } from "react";
import { Button, Col, Row, Form, Table, Container, ButtonGroup } from "react-bootstrap";
import {
  IoLogInOutline,
  IoLogOutOutline,
  IoCafeOutline,
  IoBarChartSharp,
} from "react-icons/io5";
import { FaRegCalendarAlt, FaDollarSign } from "react-icons/fa";
import { CiBoxList } from "react-icons/ci";
import CountUp from "react-countup";
import { MdOutlineMessage } from "react-icons/md";
import FaqComponent from "../Leave/FaqComponent"; // keep this external

const StatusTab = () => {
  const [showFAQ, setShowFAQ] = useState(false);
  const [viewType, setViewType] = useState("table");
  const [attendanceData, setAttendanceData] = useState([]);
  const [summary, setSummary] = useState({
    avgWorkingHrs: "00:00",
    avgInTime: "00:00",
    avgOutTime: "00:00",
    avgBreak: "00",
    paidDays: 0,
  });
  const [selectedMonth, setSelectedMonth] = useState("04"); // April

  // Simulated API response
  const fullData = [
    { date: "07-Apr-2025", in: "09:03:07", out: "-", hours: "00:45:56", remark: "Present" },
    { date: "06-Apr-2025", in: "-", out: "-", hours: "00:00:00", remark: "Week Off" },
    { date: "05-Apr-2025", in: "-", out: "-", hours: "00:00:00", remark: "Week Off" },
    { date: "04-Apr-2025", in: "08:58:52", out: "19:38:07", hours: "10:39:15", remark: "Present" },
    { date: "03-Apr-2025", in: "09:06:44", out: "19:06:47", hours: "10:00:03", remark: "Present" },
    { date: "02-Apr-2025", in: "08:59:29", out: "19:13:30", hours: "10:14:01", remark: "Present" },
    { date: "12-Mar-2025", in: "09:00:00", out: "18:00:00", hours: "09:00:00", remark: "Present" },
    { date: "15-Mar-2025", in: "-", out: "-", hours: "00:00:00", remark: "Week Off" },
  ];

  useEffect(() => {
    const filtered = fullData.filter((item) => {
      const month = item.date.split("-")[1]; // "Apr"
      const monthMap = {
        Jan: "01", Feb: "02", Mar: "03", Apr: "04", May: "05", Jun: "06",
        Jul: "07", Aug: "08", Sep: "09", Oct: "10", Nov: "11", Dec: "12",
      };
      return monthMap[month] === selectedMonth;
    });

    const totalPaid = filtered.filter((item) => item.remark === "Present").length;
    const avgBreak = 0;
    const avgIn = "09:02";
    const avgOut = "19:19";
    const avgHours = "08:23";

    setAttendanceData(filtered);
    setSummary({
      avgBreak,
      avgInTime: avgIn,
      avgOutTime: avgOut,
      avgWorkingHrs: avgHours,
      paidDays: totalPaid,
    });
  }, [selectedMonth]);

  const chartData = attendanceData.map((item) => {
    const [h, m, s] = item.hours.split(":").map(Number);
    const workHours = h + m / 60 + s / 3600;
    return {
      date: item.date.split("-")[0],
      WORK_HOURS: parseFloat(workHours.toFixed(2)),
      BREAK_DURATION: parseFloat(summary.avgBreak),
      AUTO_CLOCKOUT: item.out === "-" ? 1 : 0,
    };
  });

  const timeToFloat = (time) => {
    const [h, m] = time.split(":").map(Number);
    return h + m / 60;
  };

  return (
    <>
      <Container>
        <Row className="align-items-center record-by-month mb-3">
          <Col lg={9}>
            <Form.Select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              style={{ width: "150px" }}
            >
              <option value="01">Jan 2025</option>
              <option value="02">Feb 2025</option>
              <option value="03">Mar 2025</option>
              <option value="04">Apr 2025</option>
              <option value="05">May 2025</option>
              <option value="06">Jun 2025</option>
              <option value="07">Jul 2025</option>
              <option value="08">Aug 2025</option>
              <option value="09">Sep 2025</option>
              <option value="10">Oct 2025</option>
              <option value="11">Nov 2025</option>
              <option value="12">Dec 2025</option>
            </Form.Select>
          </Col>
          <Col lg={3} className="d-flex justify-content-between">
            <Button variant="link" onClick={() => setShowFAQ(true)}>
              <MdOutlineMessage /> FAQ's
            </Button>
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

        <Row  className="mb-4 avg_parent text-center p-3 gx-3 gy-3">
          <Col md={6} className="lg-auto" >
            <div className="p-3 avg-Work_Hrs rounded">
              <FaRegCalendarAlt className="fs-3 text-success" />
              <h5><CountUp end={timeToFloat(summary.avgWorkingHrs)} decimals={2} duration={1.5} /></h5>
              <small>Average Working Hours</small>
            </div>
          </Col>
          <Col md={6} className="lg-auto">
            <div className="p-3 avg-In-Time rounded">
              <IoLogInOutline className="fs-3" />
              <h5><CountUp end={timeToFloat(summary.avgInTime)} decimals={2} duration={1.5} /></h5>
              <small>Average In Time</small>
            </div>
          </Col>
          <Col md={6} className="lg-auto">
            <div className="p-3 avg-out-time rounded">
              <IoLogOutOutline className="fs-3 text-primary" />
              <h5><CountUp end={timeToFloat(summary.avgOutTime)} decimals={2} duration={1.5} /></h5>
              <small>Average Out Time</small>
            </div>
          </Col>
          <Col md={6} className="lg-auto">
            <div className="p-3 avg-break rounded">
              <IoCafeOutline className="fs-3" />
              <h5><CountUp end={parseFloat(summary.avgBreak)} decimals={0} duration={1.5} /></h5>
              <small>Average Break</small>
            </div>
          </Col>
          <Col>
            <div className="p-3 paid-days rounded">
              <FaDollarSign className="fs-3 text-danger" />
              <h5><CountUp end={summary.paidDays} duration={1.5} /></h5>
              <small>Paid Days</small>
            </div>
          </Col>
        </Row>

        <Form className="mb-3 d-flex align-items-center">
          <label htmlFor="group1" className="me-2"><strong>Select Dates:</strong></label>
          <Form.Check inline label="Check/Un-Check All" name="group1" type="radio" defaultChecked />
          <Form.Check inline label="Excluding Week Off" name="group1" type="radio" />
          <div className="ms-auto"><Button variant="primary">Export to CSV</Button></div>
        </Form>

        {viewType === "table" ? (
          <Table bordered hover responsive>
            <thead>
              <tr>
                <th><Form.Check /></th>
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
                  <td><Form.Check /></td>
                  <td>{d.date}</td>
                  <td>{d.in}</td>
                  <td>{d.out}</td>
                  <td>{d.hours}</td>
                  <td className={d.remark === "Week Off" ? "text-danger" : "text-success"}>{d.remark}</td>
                  <td><Button size="sm" variant="success">Regularize</Button></td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <div style={{ width: "100%", height: 300, background: "#fff", padding: "1rem" }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 20, right: 20, bottom: 50, left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="date" angle={-45} textAnchor="end" interval={0} height={60} tick={{ fontSize: 11 }} />
                <YAxis domain={[0, 12]} tick={{ fontSize: 12 }} />
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

      {/* FAQ Modal */}
      <FaqComponent show={showFAQ} handleClose={() => setShowFAQ(false)} />
    </>
  );
};

export default StatusTab;
